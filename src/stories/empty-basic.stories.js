import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.empty", module);
import { Empty } from "antd";

stories.addWithJSX("basic", () => <Empty />);
