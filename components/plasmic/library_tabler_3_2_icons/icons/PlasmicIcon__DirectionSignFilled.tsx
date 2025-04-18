/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DirectionSignFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DirectionSignFilledIcon(props: DirectionSignFilledIconProps) {
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
          "M10.52 2.614a2.095 2.095 0 012.835-.117l.126.117 7.905 7.905c.777.777.816 2.013.117 2.836l-.117.126-7.905 7.905a2.094 2.094 0 01-2.836.117l-.126-.117-7.907-7.906a2.096 2.096 0 01-.115-2.835l.117-.126 7.905-7.905h.001zm5.969 9.535l.01-.116-.003-.12-.016-.114-.03-.11-.044-.112-.052-.098-.076-.105-.07-.081-3.5-3.5-.095-.083a1 1 0 00-1.226 0l-.094.083-.083.094a1 1 0 000 1.226l.083.094L13.085 11H8l-.117.007a1 1 0 000 1.986L8 13h5.085l-1.792 1.793-.083.094a1 1 0 001.403 1.403l.094-.083 3.5-3.5.097-.112.05-.074.037-.067.05-.112.023-.076.025-.117z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DirectionSignFilledIcon;
/* prettier-ignore-end */
