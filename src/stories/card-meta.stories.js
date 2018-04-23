import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.card", module);
import { Card, Icon, Avatar } from "antd";
const { Meta } = Card;

stories.addWithJSX("meta", () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Icon type="setting" />,
      <Icon type="edit" />,
      <Icon type="ellipsis" />
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
));
