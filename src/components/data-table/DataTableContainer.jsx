import React from "react";

export default function DataTableContainer(props) {
  return <div className="flex flex-col gap-8 w-full">{props.children}</div>;
}
