import * as React from "react";
import { ISvgProps } from "../icons/constants";

export function FileSearch(props: React.SVGProps<SVGSVGElement> | ISvgProps) {
  return React.createElement(
    "svg",
    {
      viewBox: "0 0 20 20",
      width: props.width || "1em",
      length: props.height || "auto",
      ...props,
    },
    React.createElement("path", {
      fill: props.color,
      d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    })
  );
}
export default FileSearch;
