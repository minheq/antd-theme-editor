import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.descriptions", module);
import { Descriptions } from "antd";

const DescriptionsItem = Descriptions.Item;

stories.addWithJSX("basic", () => (
  <Descriptions title="User Info">
    <DescriptionsItem label="UserName">Zhou Maomao</DescriptionsItem>
    <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
    <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
    <DescriptionsItem label="Remark">empty</DescriptionsItem>
    <DescriptionsItem label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </DescriptionsItem>
  </Descriptions>
));
