import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.page-header", module);
import { PageHeader } from "antd";

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu"
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu"
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu"
  }
];

stories.addWithJSX("breadcrumb", () => (
  <PageHeader title="Title" breadcrumb={{ routes }} />
));
