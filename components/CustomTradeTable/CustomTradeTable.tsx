import React, { useMemo } from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType, TableRowSelection } from 'antd/es/table/interface';
import styles from './CustomTradeTable.module.css';

// Define a type for table record
interface TradeRecord {
  id: string | number;
  ticker_id?: string | number;
  type?: string;
  entry_price?: number;
  shares?: number;
  status?: string;
  entryDate?: string;
  ticker_symbol?: string;
  [key: string]: unknown; // Add index signature for dynamic property access
}

// Define a type for ticker
interface Ticker {
  id: string | number;
  symbol: string;
  [key: string]: unknown;
}

// Define types for our field configuration
interface FieldConfig {
  key: string;
  fieldId: string;
  title?: string;
  isHidden?: boolean;
  disableSorting?: boolean;
  dataType?: 'text' | 'number' | 'currency' | 'percent' | 'datetime' | 'auto';
  maximumFractionDigits?: number;
  dateStyle?: string;
  timeStyle?: string;
  locale?: string;
  expr?: (record: TradeRecord, value: unknown) => React.ReactNode;
}

// Define the props interface for our component
interface CustomTradeTableProps {
  data: TradeRecord[] | { data: TradeRecord[], schema?: unknown };
  componentData?: Ticker[];
  fields?: FieldConfig[];
  className?: string;
  selectedRowKey?: string | number;
  selectedRowKeys?: (string | number)[];
  onRowSelectionChanged?: (rowKeys: (string | number)[], rows: TradeRecord[]) => void;
  themeResetClassName?: string;
}

export function CustomTradeTable({
  data = [],
  componentData = [],
  fields = [],
  className,
  selectedRowKey,
  selectedRowKeys,
  onRowSelectionChanged,
  themeResetClassName
}: CustomTradeTableProps) {
  // Prepare the data for the table
  const tableData: TradeRecord[] = Array.isArray(data) 
    ? data 
    : (data.data || []).map((item: TradeRecord, index: number) => ({ ...item, key: item.id || index }));
  
  // Create a ticker lookup map
  const tickerMap = useMemo(() => {
    const map: Record<string|number, string> = {};
    componentData.forEach(ticker => {
      map[ticker.id] = ticker.symbol;
    });
    return map;
  }, [componentData]);
  
  // Create enriched data with ticker symbols
  const enrichedData = useMemo(() => {
    return tableData.map(record => ({
      ...record,
      ticker_symbol: record.ticker_id ? tickerMap[record.ticker_id as string|number] || '' : ''
    }));
  }, [tableData, tickerMap]);
  
  // Generate filter options for each column
  const getColumnFilters = (dataIndex: string, isTickerColumn = false) => {
    // For ticker column, generate options from the componentData
    if (isTickerColumn) {
      return componentData.map(ticker => ({
        text: ticker.symbol,
        value: ticker.symbol
      }));
    }
    
    // For other columns, generate options from the unique values in the data
    const uniqueValues = new Set<string>();
    
    enrichedData.forEach((record: TradeRecord) => {
      const value = record[dataIndex];
      if (value !== undefined && value !== null) {
        uniqueValues.add(String(value));
      }
    });
    
    return Array.from(uniqueValues).map(value => ({
      text: value,
      value: value
    }));
  };

  // Create columns from fields config
  const columns: ColumnsType<TradeRecord> = fields
    .filter(field => !field.isHidden)
    .map(field => {
      const isTicker = field.fieldId === 'ticker_id';
      
      const column: Record<string, unknown> = {
        title: field.title || field.fieldId,
        dataIndex: isTicker ? 'ticker_symbol' : field.fieldId, // Use ticker_symbol for ticker column
        key: field.key,
        sorter: !field.disableSorting && ((a: TradeRecord, b: TradeRecord) => {
          if (isTicker) {
            // For ticker, sort by symbol directly
            const symbolA = a.ticker_symbol || '';
            const symbolB = b.ticker_symbol || '';
            return symbolA.localeCompare(symbolB);
          }
          
          const valueA = a[field.fieldId];
          const valueB = b[field.fieldId];
          
          if (typeof valueA === 'number' && typeof valueB === 'number') {
            return valueA - valueB;
          }
          
          return String(valueA || '').localeCompare(String(valueB || ''));
        }),
        // Standard filtering for most columns
        filters: getColumnFilters(field.fieldId, isTicker),
        filterSearch: true,
        onFilter: (value: string | number | boolean, record: TradeRecord) => {
          if (isTicker) {
            return record.ticker_symbol === value;
          }
          
          const recordValue = record[field.fieldId];
          if (recordValue === undefined || recordValue === null) return false;
          
          return String(recordValue).toLowerCase().includes(String(value).toLowerCase());
        }
      };

      // Special rendering for different data types
      if (isTicker) {
        column.render = (_: unknown, record: TradeRecord): React.ReactNode => {
          return record.ticker_symbol || (record.ticker_id ? record.ticker_id : '');
        };
      }

      // Formatting for currency fields
      if (field.dataType === 'currency') {
        column.render = (_: unknown, record: TradeRecord): React.ReactNode => {
          const value = record[field.fieldId];
          if (value === undefined || value === null) return null;
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: field.maximumFractionDigits || 2
          }).format(Number(value));
        };
      }

      // Formatting for percentage fields
      if (field.dataType === 'percent') {
        column.render = (_: unknown, record: TradeRecord): React.ReactNode => {
          const value = record[field.fieldId];
          if (value === undefined || value === null) return null;
          const valueToFormat = field.expr ? Number(value) : Number(value) / 100;
          return new Intl.NumberFormat('en-US', {
            style: 'percent',
            maximumFractionDigits: field.maximumFractionDigits || 2
          }).format(valueToFormat);
        };
      }

      // Formatting for dates
      if (field.dataType === 'datetime') {
        column.render = (_: unknown, record: TradeRecord): React.ReactNode => {
          const value = record[field.fieldId];
          if (!value) return null;
          const date = new Date(String(value));
          const options: Intl.DateTimeFormatOptions = {};
          if (field.dateStyle) options.dateStyle = field.dateStyle as Intl.DateTimeFormatOptions['dateStyle'];
          if (field.timeStyle) options.timeStyle = field.timeStyle as Intl.DateTimeFormatOptions['timeStyle'];
          return date.toLocaleDateString(field.locale || 'en-US', options);
        };
      }
      
      // Special handling for type column
      if (field.fieldId === 'type') {
        column.render = (_: unknown, record: TradeRecord): React.ReactNode => {
          const value = record[field.fieldId];
          if (value === 'long') {
            return <Tag color="green">LONG</Tag>;
          } else if (value === 'short') {
            return <Tag color="red">SHORT</Tag>;
          }
          return String(value);
        };
      }

      return column;
    });

  // Row selection configuration
  const rowSelection: TableRowSelection<TradeRecord> | undefined = 
    (selectedRowKey || selectedRowKeys) ? {
      type: selectedRowKeys ? 'checkbox' : 'radio',
      selectedRowKeys: selectedRowKeys || (selectedRowKey ? [selectedRowKey] : []),
      onChange: (keys: React.Key[], rows: TradeRecord[]) => {
        onRowSelectionChanged?.(keys as (string | number)[], rows);
      }
    } : undefined;

  return (
    <div className={`${styles.customTradeTableContainer} ${className || ''} ${themeResetClassName || ''}`}>
      <Table<TradeRecord>
        rowSelection={rowSelection}
        columns={columns as ColumnsType<TradeRecord>}
        dataSource={enrichedData}
        rowKey={(record) => record.id || String(record.key)}
        pagination={{ 
          pageSize: 15, 
          showSizeChanger: true, 
          pageSizeOptions: ['10', '15', '30', '50'],
          showTotal: (total) => `Total ${total} items`
        }}
        scroll={{ x: 'max-content' }}
        size="small"
        className={styles.customTradeTable}
      />
    </div>
  );
}