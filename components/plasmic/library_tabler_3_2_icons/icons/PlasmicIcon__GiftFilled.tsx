/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GiftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GiftFilledIcon(props: GiftFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 14v8H7a3 3 0 01-3-3v-4a1 1 0 011-1h6zm8 0a1 1 0 011 1v4a3 3 0 01-3 3h-4v-8h6zM16.5 2a3.5 3.5 0 013.163 5H20a2 2 0 012 2v1a2 2 0 01-2 2h-7V7h-2v5H4a2 2 0 01-2-2V9a2 2 0 012-2h.337A3.486 3.486 0 014 5.5C4 3.567 5.567 2 7.483 2c1.755-.03 3.312 1.092 4.381 2.934l.136.243c1.033-1.914 2.56-3.114 4.291-3.175L16.5 2zm-9 2a1.5 1.5 0 000 3h3.143C9.902 5.095 8.694 3.98 7.5 4zm8.983 0c-1.18-.02-2.385 1.096-3.126 3H16.5a1.5 1.5 0 10-.017-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GiftFilledIcon;
/* prettier-ignore-end */
