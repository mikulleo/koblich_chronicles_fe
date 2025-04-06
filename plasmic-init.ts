import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { CustomTradeTable } from "./components/CustomTradeTable/CustomTradeTable";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "ttgHbB2M2MvGS434ZBzqAV",
      token: "MXWflwo2ougSQvzVJL6TpD4zyfAcSq2pJqaIxRphqdbGEMddBiKCzSirmCGtuDScwMSilnYt3wr627Z9w",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(CustomTradeTable, {
  name: "CustomTradeTable",
  displayName: "Custom Trade Table",
  importPath: "./components/CustomTradeTable/CustomTradeTable",
  props: {
    data: {
      type: "object",
      displayName: "Data",
      description: "The data to display in the table"
    },
    componentData: {
      type: "object",
      displayName: "Component Data",
      description: "Data needed to display ticker symbols"
    },
    fields: {
      type: "object",
      displayName: "Fields",
      description: "Field configuration for the table columns"
    },
    className: {
      type: "string",
      displayName: "Class Name"
    },
    selectedRowKey: {
      type: "string",
      displayName: "Selected Row Key"
    },
    selectedRowKeys: {
      type: "object", // This should be object, not array
      displayName: "Selected Row Keys"
    },
    onRowSelectionChanged: {
      type: "eventHandler",
      displayName: "On Row Selection Changed",
      argTypes: [
        { name: "rowKeys", type: "object" },
        { name: "rows", type: "object" }
      ]
    },
    themeResetClassName: {
      type: "themeResetClass",
      targetAllTags: true
    }
  }
});
