/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlarmMinusFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlarmMinusFilledIcon(props: AlarmMinusFilledIconProps) {
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
          "M16 6.072a8 8 0 11-11.995 7.213L4 13l.005-.285A8 8 0 0116 6.072zM14 12h-4l-.117.007A1 1 0 0010 14h4l.117-.007A1 1 0 0014 12z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.412 3.191A1 1 0 017.685 4.73l-.097.08-2.75 2a1 1 0 01-1.273-1.54l.097-.08 2.75-1.999zm9.779.221a1 1 0 011.291-.288l.106.067 2.75 2a1 1 0 01-1.07 1.685l-.106-.067-2.75-2a1 1 0 01-.221-1.397z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlarmMinusFilledIcon;
/* prettier-ignore-end */
