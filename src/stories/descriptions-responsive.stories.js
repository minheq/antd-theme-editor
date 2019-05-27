import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.descriptions", module);
import { Descriptions } from "antd";

const DescriptionsItem = Descriptions.Item;

const Demo = () => {
  return (
    <div>
      <Descriptions
        title="Responsive Descriptions"
        border
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <DescriptionsItem label="Product">Cloud Database</DescriptionsItem>
        <DescriptionsItem label="Billing">Prepaid</DescriptionsItem>
        <DescriptionsItem label="time">18:00:00</DescriptionsItem>
        <DescriptionsItem label="Amount">$80.00</DescriptionsItem>
        <DescriptionsItem label="Discount">$20.00</DescriptionsItem>
        <DescriptionsItem label="Official">$60.00</DescriptionsItem>
        <DescriptionsItem label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication_factor:3
          <br />
          Region: East China 1
        </DescriptionsItem>
      </Descriptions>
    </div>
  );
};

stories.addWithJSX("responsive", () => <Demo />);
