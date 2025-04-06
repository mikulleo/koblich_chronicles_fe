/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ttgHbB2M2MvGS434ZBzqAV
// Component: QyNQcvC_cXwy

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: TzYooJ-ChIAu/component
import Section from "../../Section"; // plasmic-import: rEAlJ2tapI6z/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import { CustomTradeTable } from "../../CustomTradeTable/CustomTradeTable"; // plasmic-import: ulUpaqEWTxZr/codeComponent
import FooterSection from "../../FooterSection"; // plasmic-import: VwP4GkeGOFgi/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsd25QuUa2NRj1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: d25QUUa2NRj1/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ttgHbB2M2MvGS434ZBzqAV/projectcss
import sty from "./PlasmicTrades.module.css"; // plasmic-import: QyNQcvC_cXwy/css

createPlasmicElementProxy;

export type PlasmicTrades__VariantMembers = {};
export type PlasmicTrades__VariantsArgs = {};
type VariantPropType = keyof PlasmicTrades__VariantsArgs;
export const PlasmicTrades__VariantProps = new Array<VariantPropType>();

export type PlasmicTrades__ArgsType = {};
type ArgPropType = keyof PlasmicTrades__ArgsType;
export const PlasmicTrades__ArgProps = new Array<ArgPropType>();

export type PlasmicTrades__OverridesType = {
  root?: Flex__<"div">;
  headerHeroSection?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  section?: Flex__<typeof Section>;
  table2?: Flex__<typeof RichTable>;
  tradesApiFetches?: Flex__<typeof DataFetcher>;
  customTradeTable?: Flex__<typeof CustomTradeTable>;
  text?: Flex__<"div">;
  footerSection?: Flex__<typeof FooterSection>;
};

export interface DefaultTradesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTrades__RenderFunc(props: {
  variants: PlasmicTrades__VariantsArgs;
  args: PlasmicTrades__ArgsType;
  overrides: PlasmicTrades__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table2.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table2.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table2.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table2.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    tradesDataDb: usePlasmicDataOp(() => {
      return {
        sourceId: "47VpPrCKsocccAyhzPVgaC",
        opId: "a9538212-3ab8-4729-8546-238b1df706ce",
        userArgs: {},
        cacheKey: `plasmic.$.a9538212-3ab8-4729-8546-238b1df706ce.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    tickersDataDb: usePlasmicDataOp(() => {
      return {
        sourceId: "47VpPrCKsocccAyhzPVgaC",
        opId: "00567d87-1d86-4f40-8279-a28fc5d588fd",
        userArgs: {},
        cacheKey: `plasmic.$.00567d87-1d86-4f40-8279-a28fc5d588fd.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsd25QuUa2NRj1()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicTrades.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicTrades.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicTrades.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
            plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"headerHeroSection"}
            data-plasmic-override={overrides.headerHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerHeroSection)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />
          </Stack__>
          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            size={
              hasVariant(globalVariants, "screen", "mobile")
                ? "fullContentWidth"
                : "dashboardSection"
            }
          >
            {(() => {
              const child$Props = {
                canSelectRows: "none",
                className: classNames("__wab_instance", sty.table2),
                data: (() => {
                  try {
                    return $queries.tradesDataDb;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })(),
                fields: (() => {
                  const __composite = [
                    {
                      key: "type",
                      fieldId: "type",
                      isHidden: null,
                      title: null
                    },
                    {
                      key: "ticker_id",
                      fieldId: "ticker_id",
                      expr: null,
                      title: null
                    },
                    {
                      key: "setup_type",
                      fieldId: "setup_type",
                      isHidden: null
                    },
                    {
                      key: "entry_date",
                      fieldId: "entry_date",
                      isHidden: null,
                      dataType: null,
                      dateStyle: null,
                      timeStyle: null,
                      hour12: null,
                      locale: null,
                      title: null
                    },
                    {
                      key: "entry_price",
                      fieldId: "entry_price",
                      isHidden: null,
                      title: null,
                      dataType: null,
                      notation: null,
                      maximumFractionDigits: null,
                      locale: null
                    },
                    {
                      key: "current_metrics_break_even_shares",
                      fieldId: "current_metrics_break_even_shares",
                      isHidden: null
                    },
                    {
                      key: "risk_amount",
                      fieldId: "risk_amount",
                      isHidden: null
                    },
                    {
                      key: "current_metrics_risk_percent",
                      fieldId: "current_metrics_risk_percent",
                      isHidden: null
                    },
                    {
                      key: "normalized_metrics_profit_loss_percent",
                      fieldId: "normalized_metrics_profit_loss_percent",
                      isHidden: null
                    },
                    {
                      key: "normalization_factor",
                      fieldId: "normalization_factor",
                      isHidden: null,
                      dataType: null,
                      locale: null,
                      maximumFractionDigits: null,
                      title: null
                    },
                    { key: "status", fieldId: "status", isHidden: null },
                    {
                      key: "normalized_metrics_profit_loss_amount",
                      fieldId: "normalized_metrics_profit_loss_amount",
                      isHidden: null
                    },
                    {
                      key: "profit_loss_percent",
                      fieldId: "profit_loss_percent",
                      isHidden: null
                    },
                    {
                      key: "current_metrics_profit_loss_amount",
                      fieldId: "current_metrics_profit_loss_amount",
                      isHidden: null
                    },
                    {
                      key: "current_price",
                      fieldId: "current_price",
                      isHidden: null
                    },
                    {
                      key: "updated_at",
                      fieldId: "updated_at",
                      isHidden: null
                    },
                    { key: "r_ratio", fieldId: "r_ratio", isHidden: null },
                    {
                      key: "current_metrics_r_ratio",
                      fieldId: "current_metrics_r_ratio",
                      isHidden: null
                    },
                    { key: "days_held", fieldId: "days_held", isHidden: null },
                    {
                      key: "initial_stop_loss",
                      fieldId: "initial_stop_loss",
                      isHidden: null,
                      title: null,
                      dataType: null,
                      locale: null,
                      maximumFractionDigits: null
                    },
                    {
                      key: "position_size",
                      fieldId: "position_size",
                      isHidden: null
                    },
                    {
                      key: "current_metrics_last_updated",
                      fieldId: "current_metrics_last_updated",
                      isHidden: null
                    },
                    {
                      key: "created_at",
                      fieldId: "created_at",
                      isHidden: null
                    },
                    { key: "shares", fieldId: "shares", isHidden: null },
                    {
                      key: "target_position_size",
                      fieldId: "target_position_size",
                      isHidden: null
                    },
                    { key: "id", fieldId: "id", isHidden: null },
                    {
                      key: "current_metrics_profit_loss_percent",
                      fieldId: "current_metrics_profit_loss_percent",
                      isHidden: null
                    },
                    {
                      key: "profit_loss_amount",
                      fieldId: "profit_loss_amount",
                      isHidden: null
                    },
                    {
                      key: "normalized_metrics_r_ratio",
                      fieldId: "normalized_metrics_r_ratio",
                      isHidden: null
                    },
                    {
                      key: "risk_percent",
                      fieldId: "risk_percent",
                      isHidden: null,
                      title: null,
                      dataType: null,
                      maximumFractionDigits: null,
                      expr: null,
                      locale: null
                    },
                    {
                      key: "current_metrics_risk_amount",
                      fieldId: "current_metrics_risk_amount",
                      isHidden: null
                    },
                    { key: "notes", fieldId: "notes", isHidden: null }
                  ];
                  __composite["0"]["isHidden"] = false;
                  __composite["0"]["title"] = "Type";
                  __composite["1"]["expr"] = (currentItem, currentValue) => {
                    return $queries.tickersDataDb.data.find(
                      t => t.id === currentItem.ticker_id
                    )?.symbol;
                  };
                  __composite["1"]["title"] = "Ticker";
                  __composite["2"]["isHidden"] = true;
                  __composite["3"]["isHidden"] = false;
                  __composite["3"]["dataType"] = "datetime";
                  __composite["3"]["dateStyle"] = "medium";
                  __composite["3"]["timeStyle"] = "none";
                  __composite["3"]["hour12"] = false;
                  __composite["3"]["locale"] = "en-US";
                  __composite["3"]["title"] = "Buy Date";
                  __composite["4"]["isHidden"] = false;
                  __composite["4"]["title"] = "Entry";
                  __composite["4"]["dataType"] = "currency";
                  __composite["4"]["notation"] = "standard";
                  __composite["4"]["maximumFractionDigits"] = 2;
                  __composite["4"]["locale"] = "en-US";
                  __composite["5"]["isHidden"] = true;
                  __composite["6"]["isHidden"] = true;
                  __composite["7"]["isHidden"] = true;
                  __composite["8"]["isHidden"] = true;
                  __composite["9"]["isHidden"] = false;
                  __composite["9"]["dataType"] = "percent";
                  __composite["9"]["locale"] = "en-US";
                  __composite["9"]["maximumFractionDigits"] = 0;
                  __composite["9"]["title"] = "Size";
                  __composite["10"]["isHidden"] = true;
                  __composite["11"]["isHidden"] = true;
                  __composite["12"]["isHidden"] = true;
                  __composite["13"]["isHidden"] = true;
                  __composite["14"]["isHidden"] = true;
                  __composite["15"]["isHidden"] = true;
                  __composite["16"]["isHidden"] = true;
                  __composite["17"]["isHidden"] = true;
                  __composite["18"]["isHidden"] = true;
                  __composite["19"]["isHidden"] = false;
                  __composite["19"]["title"] = "Init Stop Loss";
                  __composite["19"]["dataType"] = "currency";
                  __composite["19"]["locale"] = "en-US";
                  __composite["19"]["maximumFractionDigits"] = 2;
                  __composite["20"]["isHidden"] = true;
                  __composite["21"]["isHidden"] = true;
                  __composite["22"]["isHidden"] = true;
                  __composite["23"]["isHidden"] = true;
                  __composite["24"]["isHidden"] = true;
                  __composite["25"]["isHidden"] = true;
                  __composite["26"]["isHidden"] = true;
                  __composite["27"]["isHidden"] = true;
                  __composite["28"]["isHidden"] = true;
                  __composite["29"]["isHidden"] = false;
                  __composite["29"]["title"] = "Position Risk";
                  __composite["29"]["dataType"] = "percent";
                  __composite["29"]["maximumFractionDigits"] = 2;
                  __composite["29"]["expr"] = (currentItem, currentValue) => {
                    return currentValue / 100;
                  };
                  __composite["29"]["locale"] = "en-US";
                  __composite["30"]["isHidden"] = true;
                  __composite["31"]["isHidden"] = true;
                  return __composite;
                })(),

                hideColumnPicker: false,
                hideDensity: false,
                hideExports: false,
                hideSearch: false,
                onRowSelectionChanged: async (...eventArgs: any) => {
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRowKey",
                    ["table2", "selectedRowKey"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRow",
                    ["table2", "selectedRow"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRows",
                    ["table2", "selectedRows"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "selectedRowKeys",
                    ["table2", "selectedRowKeys"],
                    RichTable_Helpers
                  ).apply(null, eventArgs);
                },
                scopeClassName: sty["table2__instance"],
                selectedRowKey: generateStateValueProp($state, [
                  "table2",
                  "selectedRowKey"
                ]),
                selectedRowKeys: generateStateValueProp($state, [
                  "table2",
                  "selectedRowKeys"
                ]),
                themeResetClassName: classNames(
                  projectcss.root_reset,
                  projectcss.root_reset_tags,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens,
                  plasmic_plasmic_rich_components_css.plasmic_tokens,
                  plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
                  plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens
                )
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "selectedRowKey",
                    plasmicStateName: "table2.selectedRowKey"
                  },
                  {
                    name: "selectedRow",
                    plasmicStateName: "table2.selectedRow"
                  },
                  {
                    name: "selectedRows",
                    plasmicStateName: "table2.selectedRows"
                  },
                  {
                    name: "selectedRowKeys",
                    plasmicStateName: "table2.selectedRowKeys"
                  }
                ],
                [],
                RichTable_Helpers ?? {},
                child$Props
              );

              return (
                <RichTable
                  data-plasmic-name={"table2"}
                  data-plasmic-override={overrides.table2}
                  {...child$Props}
                />
              );
            })()}
            <DataFetcher
              data-plasmic-name={"tradesApiFetches"}
              data-plasmic-override={overrides.tradesApiFetches}
              className={classNames("__wab_instance", sty.tradesApiFetches)}
              dataName={"fetchedTradesData"}
              errorDisplay={
                <DataCtxReader__>
                  {$ctx => "Error fetching data"}
                </DataCtxReader__>
              }
              errorName={"fetchTradesError"}
              headers={{ "Content-Type": "application/json" }}
              loadingDisplay={
                <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
              }
              method={"GET"}
              noLayout={false}
              previewErrorDisplay={false}
              previewSpinner={false}
              url={"http://localhost:3001/api/trades"}
            >
              <DataCtxReader__>
                {$ctx => (
                  <CustomTradeTable
                    data-plasmic-name={"customTradeTable"}
                    data-plasmic-override={overrides.customTradeTable}
                    className={classNames(
                      "__wab_instance",
                      sty.customTradeTable
                    )}
                    componentData={(() => {
                      try {
                        return $queries.tickersDataDb.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    data={(() => {
                      try {
                        return $queries.tradesDataDb.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    fields={[
                      {
                        key: "type",
                        fieldId: "type",
                        title: "Type",
                        isHidden: false
                      },
                      {
                        key: "ticker_id",
                        fieldId: "ticker_id",
                        title: "Ticker",
                        isHidden: false
                      },
                      {
                        key: "entry_date",
                        fieldId: "entry_date",
                        title: "Buy Date",
                        isHidden: false,
                        dataType: "datetime",
                        dateStyle: "medium"
                      },
                      {
                        key: "entry_price",
                        fieldId: "entry_price",
                        title: "Entry",
                        isHidden: false,
                        dataType: "currency",
                        maximumFractionDigits: 2
                      },
                      {
                        key: "normalization_factor",
                        fieldId: "normalization_factor",
                        title: "Size",
                        isHidden: false,
                        dataType: "percent",
                        maximumFractionDigits: 0
                      },
                      {
                        key: "initial_stop_loss",
                        fieldId: "initial_stop_loss",
                        title: "Init Stop Loss",
                        isHidden: false,
                        dataType: "currency",
                        maximumFractionDigits: 2
                      },
                      {
                        key: "risk_percent",
                        fieldId: "risk_percent",
                        title: "Position Risk",
                        isHidden: false,
                        dataType: "percent",
                        maximumFractionDigits: 2
                      }
                    ]}
                    themeResetClassName={classNames(
                      projectcss.root_reset,
                      projectcss.root_reset_tags,
                      projectcss.plasmic_default_styles,
                      projectcss.plasmic_mixins,
                      projectcss.plasmic_tokens,
                      plasmic_antd_5_hostless_css.plasmic_tokens,
                      plasmic_plasmic_rich_components_css.plasmic_tokens,
                      plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
                      plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens
                    )}
                  />
                )}
              </DataCtxReader__>
            </DataFetcher>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Enter some text"}
            </div>
          </Section>
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerHeroSection",
    "navbar",
    "section",
    "table2",
    "tradesApiFetches",
    "customTradeTable",
    "text",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar"],
  navbar: ["navbar"],
  section: [
    "section",
    "table2",
    "tradesApiFetches",
    "customTradeTable",
    "text"
  ],
  table2: ["table2"],
  tradesApiFetches: ["tradesApiFetches", "customTradeTable"],
  customTradeTable: ["customTradeTable"],
  text: ["text"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroSection: "div";
  navbar: typeof Navbar;
  section: typeof Section;
  table2: typeof RichTable;
  tradesApiFetches: typeof DataFetcher;
  customTradeTable: typeof CustomTradeTable;
  text: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTrades__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTrades__VariantsArgs;
    args?: PlasmicTrades__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTrades__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTrades__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTrades__ArgProps,
          internalVariantPropNames: PlasmicTrades__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTrades__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTrades";
  } else {
    func.displayName = `PlasmicTrades.${nodeName}`;
  }
  return func;
}

export const PlasmicTrades = Object.assign(
  // Top-level PlasmicTrades renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    section: makeNodeComponent("section"),
    table2: makeNodeComponent("table2"),
    tradesApiFetches: makeNodeComponent("tradesApiFetches"),
    customTradeTable: makeNodeComponent("customTradeTable"),
    text: makeNodeComponent("text"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicTrades
    internalVariantProps: PlasmicTrades__VariantProps,
    internalArgProps: PlasmicTrades__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Home",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTrades;
/* prettier-ignore-end */
