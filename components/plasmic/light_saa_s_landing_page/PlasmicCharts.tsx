/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ttgHbB2M2MvGS434ZBzqAV
// Component: jU3FO6vgkzuJ

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
import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import Select from "../../Select"; // plasmic-import: 1TAc3ShgQJlX/component
import MenuItem from "../../MenuItem"; // plasmic-import: Pprs0qZAKpHo/component
import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ttgHbB2M2MvGS434ZBzqAV/projectcss
import sty from "./PlasmicCharts.module.css"; // plasmic-import: jU3FO6vgkzuJ/css

createPlasmicElementProxy;

export type PlasmicCharts__VariantMembers = {};
export type PlasmicCharts__VariantsArgs = {};
type VariantPropType = keyof PlasmicCharts__VariantsArgs;
export const PlasmicCharts__VariantProps = new Array<VariantPropType>();

export type PlasmicCharts__ArgsType = {};
type ArgPropType = keyof PlasmicCharts__ArgsType;
export const PlasmicCharts__ArgProps = new Array<ArgPropType>();

export type PlasmicCharts__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  select?: Flex__<typeof Select>;
  text?: Flex__<"div">;
  menuItem?: Flex__<typeof MenuItem>;
  fromDatePicker?: Flex__<typeof AntdDatePicker>;
  toDatePicker?: Flex__<typeof AntdDatePicker>;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultChartsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCharts__RenderFunc(props: {
  variants: PlasmicCharts__VariantsArgs;
  args: PlasmicCharts__ArgsType;
  overrides: PlasmicCharts__OverridesType;
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
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "toDatePicker.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "fromDatePicker.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
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
    componentData: usePlasmicDataOp(() => {
      return {
        sourceId: "47VpPrCKsocccAyhzPVgaC",
        opId: "c27902d2-24a0-484c-856f-10634302ef6b",
        userArgs: {},
        cacheKey: `plasmic.$.c27902d2-24a0-484c-856f-10634302ef6b.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicCharts.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCharts.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCharts.pageMetadata.title}
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
          <div className={classNames(projectcss.all, sty.freeBox__zitWp)}>
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <DataFetcher
              className={classNames(
                "__wab_instance",
                sty.httpRestApiFetcher__xRDlM
              )}
              dataName={"fetchedData"}
              errorDisplay={
                <DataCtxReader__>
                  {$ctx => "Error fetching data"}
                </DataCtxReader__>
              }
              errorName={"fetchError"}
              loadingDisplay={
                <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
              }
              method={"GET"}
              noLayout={false}
              url={"http://localhost:3000/api/tickers"}
            >
              <DataCtxReader__>
                {$ctx => (
                  <React.Fragment>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__e8Isj)}
                    >
                      <Select
                        data-plasmic-name={"select"}
                        data-plasmic-override={overrides.select}
                        className={classNames("__wab_instance", sty.select)}
                        items={(_par =>
                          !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                          (() => {
                            try {
                              return $ctx.fetchedData.docs;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return [];
                              }
                              throw e;
                            }
                          })()
                        ).map((__plasmic_item_0, __plasmic_idx_0) => {
                          const currentItem = __plasmic_item_0;
                          const currentIndex = __plasmic_idx_0;
                          return (
                            <MenuItem
                              data-plasmic-name={"menuItem"}
                              data-plasmic-override={overrides.menuItem}
                              key={currentIndex}
                              label={(() => {
                                try {
                                  return currentItem.symbol;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                              value={(() => {
                                try {
                                  return currentItem.symbol;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                            />
                          );
                        })}
                        label={
                          <div
                            data-plasmic-name={"text"}
                            data-plasmic-override={overrides.text}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"Ticker"}
                          </div>
                        }
                        onChange={async (...eventArgs: any) => {
                          generateStateOnChangeProp($state, [
                            "select",
                            "value"
                          ]).apply(null, eventArgs);

                          if (
                            eventArgs.length > 1 &&
                            eventArgs[1] &&
                            eventArgs[1]._plasmic_state_init_
                          ) {
                            return;
                          }
                        }}
                        showDescription={false}
                        showLabel={true}
                      />

                      {(() => {
                        const child$Props = {
                          className: classNames(
                            "__wab_instance",
                            sty.fromDatePicker
                          ),
                          disabled: false,
                          onChange: async (...eventArgs: any) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "value",
                              ["fromDatePicker", "value"],
                              AntdDatePicker_Helpers
                            ).apply(null, eventArgs);
                          },
                          picker: "date",
                          popupScopeClassName:
                            sty["fromDatePicker__datePickerPopup"],
                          value: generateStateValueProp($state, [
                            "fromDatePicker",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "fromDatePicker.value"
                            }
                          ],
                          [],
                          AntdDatePicker_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <AntdDatePicker
                            data-plasmic-name={"fromDatePicker"}
                            data-plasmic-override={overrides.fromDatePicker}
                            {...child$Props}
                          />
                        );
                      })()}
                      {(() => {
                        const child$Props = {
                          className: classNames(
                            "__wab_instance",
                            sty.toDatePicker
                          ),
                          disabled: false,
                          onChange: async (...eventArgs: any) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "value",
                              ["toDatePicker", "value"],
                              AntdDatePicker_Helpers
                            ).apply(null, eventArgs);
                          },
                          picker: "date",
                          popupScopeClassName:
                            sty["toDatePicker__datePickerPopup"],
                          showTime: false,
                          value: generateStateValueProp($state, [
                            "toDatePicker",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "toDatePicker.value"
                            }
                          ],
                          [],
                          AntdDatePicker_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <AntdDatePicker
                            data-plasmic-name={"toDatePicker"}
                            data-plasmic-override={overrides.toDatePicker}
                            {...child$Props}
                          />
                        );
                      })()}
                    </div>
                    <DataFetcher
                      className={classNames(
                        "__wab_instance",
                        sty.httpRestApiFetcher__h96GH
                      )}
                      dataName={"fetchedCharts"}
                      errorDisplay={
                        <DataCtxReader__>
                          {$ctx => "Error fetching data"}
                        </DataCtxReader__>
                      }
                      errorName={"fetchError"}
                      loadingDisplay={
                        <DataCtxReader__>
                          {$ctx => "Loading..."}
                        </DataCtxReader__>
                      }
                      method={"GET"}
                      noLayout={false}
                      url={"http://localhost:3000/api/charts"}
                    >
                      <DataCtxReader__>
                        {$ctx =>
                          (() => {
                            const child$Props = {
                              beforeChange: async (...eventArgs: any) => {
                                generateStateOnChangePropForCodeComponents(
                                  $state,
                                  "currentSlide",
                                  ["sliderCarousel", "currentSlide"],
                                  SliderWrapper_Helpers
                                ).apply(null, eventArgs);
                              },
                              className: classNames(
                                "__wab_instance",
                                sty.sliderCarousel
                              ),
                              initialSlide: generateStateValueProp($state, [
                                "sliderCarousel",
                                "currentSlide"
                              ]),
                              ref: ref => {
                                $refs["sliderCarousel"] = ref;
                              },
                              sliderScopeClassName:
                                sty["sliderCarousel__slider"]
                            };
                            initializeCodeComponentStates(
                              $state,
                              [
                                {
                                  name: "currentSlide",
                                  plasmicStateName:
                                    "sliderCarousel.currentSlide"
                                }
                              ],
                              [],
                              SliderWrapper_Helpers ?? {},
                              child$Props
                            );

                            return (
                              <SliderWrapper
                                data-plasmic-name={"sliderCarousel"}
                                data-plasmic-override={overrides.sliderCarousel}
                                {...child$Props}
                              >
                                {(_par =>
                                  !_par
                                    ? []
                                    : Array.isArray(_par)
                                    ? _par
                                    : [_par])(
                                  (() => {
                                    try {
                                      return $ctx.fetchedCharts.docs.filter(
                                        function (doc) {
                                          // First check ticker symbol condition
                                          var tickerCondition =
                                            doc.ticker.symbol ==
                                            $state.select.value;
                                          // Only check from date if it has a value
                                          var fromDateCondition = $state
                                            .fromDatePicker.value
                                            ? doc.timestamp >=
                                              $state.fromDatePicker.value
                                            : true;
                                          // Only check to date if it has a value
                                          var toDateCondition = $state
                                            .toDatePicker.value
                                            ? doc.timestamp <=
                                              $state.toDatePicker.value
                                            : true;
                                          // Return true if all applicable conditions are met
                                          return (
                                            tickerCondition &&
                                            fromDateCondition &&
                                            toDateCondition
                                          );
                                        }
                                      );
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return [];
                                      }
                                      throw e;
                                    }
                                  })()
                                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                                  const currentItem = __plasmic_item_0;
                                  const currentIndex = __plasmic_idx_0;
                                  return (
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        sty.freeBox__jc1MV
                                      )}
                                      key={currentIndex}
                                    >
                                      <PlasmicImg__
                                        data-plasmic-name={"img"}
                                        data-plasmic-override={overrides.img}
                                        alt={""}
                                        className={classNames(sty.img)}
                                        displayHeight={"auto"}
                                        displayMaxHeight={"none"}
                                        displayMaxWidth={"100%"}
                                        displayMinHeight={"0"}
                                        displayMinWidth={"0"}
                                        displayWidth={"auto"}
                                        height={(() => {
                                          try {
                                            return $ctx.fetchedCharts.docs[0]
                                              .image.height;
                                          } catch (e) {
                                            if (
                                              e instanceof TypeError ||
                                              e?.plasmicType ===
                                                "PlasmicUndefinedDataError"
                                            ) {
                                              return undefined;
                                            }
                                            throw e;
                                          }
                                        })()}
                                        src={(() => {
                                          try {
                                            return (
                                              "https://c167-2a02-830a-b01c-4400-b9a4-b39e-172a-9352.ngrok-free.app" +
                                              currentItem.image.url
                                            );
                                          } catch (e) {
                                            if (
                                              e instanceof TypeError ||
                                              e?.plasmicType ===
                                                "PlasmicUndefinedDataError"
                                            ) {
                                              return "https://static1.plasmic.app/components/react-slick/slide1.png";
                                            }
                                            throw e;
                                          }
                                        })()}
                                        width={(() => {
                                          try {
                                            return $ctx.fetchedCharts.docs[0]
                                              .image.width;
                                          } catch (e) {
                                            if (
                                              e instanceof TypeError ||
                                              e?.plasmicType ===
                                                "PlasmicUndefinedDataError"
                                            ) {
                                              return undefined;
                                            }
                                            throw e;
                                          }
                                        })()}
                                      />
                                    </div>
                                  );
                                })}
                              </SliderWrapper>
                            );
                          })()
                        }
                      </DataCtxReader__>
                    </DataFetcher>
                  </React.Fragment>
                )}
              </DataCtxReader__>
            </DataFetcher>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "select",
    "text",
    "menuItem",
    "fromDatePicker",
    "toDatePicker",
    "sliderCarousel",
    "img"
  ],
  navbar: ["navbar"],
  select: ["select", "text", "menuItem"],
  text: ["text"],
  menuItem: ["menuItem"],
  fromDatePicker: ["fromDatePicker"],
  toDatePicker: ["toDatePicker"],
  sliderCarousel: ["sliderCarousel", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  select: typeof Select;
  text: "div";
  menuItem: typeof MenuItem;
  fromDatePicker: typeof AntdDatePicker;
  toDatePicker: typeof AntdDatePicker;
  sliderCarousel: typeof SliderWrapper;
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCharts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCharts__VariantsArgs;
    args?: PlasmicCharts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCharts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCharts__ArgsType,
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
          internalArgPropNames: PlasmicCharts__ArgProps,
          internalVariantPropNames: PlasmicCharts__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCharts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCharts";
  } else {
    func.displayName = `PlasmicCharts.${nodeName}`;
  }
  return func;
}

export const PlasmicCharts = Object.assign(
  // Top-level PlasmicCharts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    select: makeNodeComponent("select"),
    text: makeNodeComponent("text"),
    menuItem: makeNodeComponent("menuItem"),
    fromDatePicker: makeNodeComponent("fromDatePicker"),
    toDatePicker: makeNodeComponent("toDatePicker"),
    sliderCarousel: makeNodeComponent("sliderCarousel"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicCharts
    internalVariantProps: PlasmicCharts__VariantProps,
    internalArgProps: PlasmicCharts__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Charts",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCharts;
/* prettier-ignore-end */
