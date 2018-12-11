import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.pagination", module);
import { Pagination } from "antd";

function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
}

stories.addWithJSX("itemRender", () => (
  <Pagination total={500} itemRender={itemRender} />
));
