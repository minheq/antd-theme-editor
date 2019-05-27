import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.pagination", module);
import { Pagination } from "antd";

function onChange(pageNumber) {
  console.log("Page: ", pageNumber);
}

stories.addWithJSX("jump", () => (
  <div>
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
    />
    <br />
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
      disabled
    />
  </div>
));
