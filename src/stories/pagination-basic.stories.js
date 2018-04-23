import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.pagination", module);
import { Pagination } from "antd";

stories.addWithJSX("basic", () => <Pagination defaultCurrent={1} total={50} />);
