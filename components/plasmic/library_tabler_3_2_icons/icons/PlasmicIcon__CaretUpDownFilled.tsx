/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretUpDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretUpDownFilledIcon(props: CaretUpDownFilledIconProps) {
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
          "M11.293 3.293a1 1 0 011.414 0l6 6a.95.95 0 01.073.082l.006.008.016.022.042.059.009.015.007.01.014.027.024.044.007.017.01.02.012.032.015.034.007.025.008.02.005.026.012.037.004.028.006.025.003.026.006.033.002.03.003.028v.026L19 10l-.002.033v.026l-.003.026-.002.032-.005.029-.004.03-.006.024-.004.03-.012.035-.005.027-.008.019-.007.026-.015.033-.012.034-.01.018-.007.018-.024.043-.014.028-.007.009-.009.016-.042.058-.012.019-.004.003-.006.01a1.008 1.008 0 01-.155.154l-.009.006-.022.016-.058.042-.016.009-.009.007-.028.014-.043.024-.018.007-.018.01-.034.012-.033.015-.024.006-.021.009-.027.005-.036.012-.029.004-.024.006-.028.003-.031.006-.032.002-.026.003h-.026L18 11H6c-.89 0-1.337-1.077-.707-1.707l6-6zM18 13l.033.002h.026l.026.003.032.002.031.006.028.003.024.006.03.004.035.012.027.005.019.008.026.007.033.015.034.012.018.01.018.007.043.024.028.014.009.007.016.009.051.037.026.017.003.004.01.006a.986.986 0 01.154.155l.006.009.015.02.043.06.009.016.007.009.014.028.024.043.005.013.012.023.012.034.015.033.007.026.008.02.005.026.012.036.004.029.006.024.003.028.006.031.002.032.003.026v.026L19 14l-.002.033v.026l-.003.026-.002.032-.006.031-.003.028-.006.024-.004.03-.012.035-.005.027-.008.019-.007.026-.015.033-.012.034-.01.018-.007.018-.024.043-.014.028-.007.009-.009.016-.042.058-.012.019-.004.003-.006.01-.073.081-6 6a1 1 0 01-1.414 0l-6-6C4.663 14.077 5.109 13 6 13h12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CaretUpDownFilledIcon;
/* prettier-ignore-end */
