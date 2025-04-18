/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceMobileFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceMobileFilledIcon(props: DeviceMobileFilledIconProps) {
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
          "M16 2a3 3 0 012.995 2.824L19 5v14a3 3 0 01-2.824 2.995L16 22H8a3 3 0 01-2.995-2.824L5 19V5a3 3 0 012.824-2.995L8 2h8zm-4 14a1 1 0 00-.993.883L11 17l.007.127a1 1 0 001.986 0L13 17.01l-.007-.127A1 1 0 0012 16zm1-12h-2l-.117.007a1 1 0 000 1.986L11 6h2l.117-.007a1 1 0 000-1.986L13 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DeviceMobileFilledIcon;
/* prettier-ignore-end */
