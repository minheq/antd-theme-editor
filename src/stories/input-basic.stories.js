import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.input", module);
import { Input } from "antd";

stories.addWithJSX("basic", () => <Input placeholder="Basic usage" />);
