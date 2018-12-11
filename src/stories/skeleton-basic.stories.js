import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.skeleton", module);
import { Skeleton } from "antd";

stories.addWithJSX("basic", () => <Skeleton />);
