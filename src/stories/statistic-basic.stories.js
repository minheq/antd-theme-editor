import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.statistic", module);
import { Statistic, Row, Col, Button } from "antd";

stories.addWithJSX("basic", () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
  </Row>
));
