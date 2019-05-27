import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.page-header", module);
import { PageHeader } from "antd";

stories.addWithJSX("basic", () => (
  <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" />
));
