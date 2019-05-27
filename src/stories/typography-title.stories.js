import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.typography", module);
import { Typography } from "antd";

const { Title } = Typography;

stories.addWithJSX("title", () => (
  <div>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
  </div>
));
