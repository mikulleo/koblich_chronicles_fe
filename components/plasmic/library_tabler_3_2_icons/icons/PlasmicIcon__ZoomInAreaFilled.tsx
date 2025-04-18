/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomInAreaFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomInAreaFilledIcon(props: ZoomInAreaFilledIconProps) {
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
          "M15 9a6 6 0 014.891 9.476l2.816 2.817a1 1 0 01-1.32 1.497l-.094-.083-2.817-2.816a6 6 0 01-9.472-4.666L9 15l.004-.225A6 6 0 0115 9zm0 3a1 1 0 00-.993.883L14 13v1h-1l-.117.007a1 1 0 000 1.986L13 16h1v1l.007.117a1 1 0 001.986 0L16 17v-1h1l.117-.007a1 1 0 000-1.986L17 14h-1v-1l-.007-.117A1 1 0 0015 12zM3 14a1 1 0 01.993.883L4 15v1a1 1 0 00.883.993L5 17h1a1 1 0 01.117 1.993L6 19H5a3 3 0 01-2.995-2.824L2 16v-1a1 1 0 011-1zm0-5a1 1 0 01.993.883L4 10v1a1 1 0 01-1.993.117L2 11v-1a1 1 0 011-1zm3-7a1 1 0 01.117 1.993L6 4H5a1 1 0 00-.993.883L4 5v1a1 1 0 01-1.993.117L2 6V5a3 3 0 012.824-2.995L5 2h1zm5 0a1 1 0 01.117 1.993L11 4h-1a1 1 0 01-.117-1.993L10 2h1zm5 0a3 3 0 012.995 2.824L19 5v1a1 1 0 01-1.993.117L17 6V5a1 1 0 00-.883-.993L16 4h-1a1 1 0 01-.117-1.993L15 2h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomInAreaFilledIcon;
/* prettier-ignore-end */
