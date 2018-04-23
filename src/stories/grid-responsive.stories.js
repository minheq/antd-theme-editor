import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.grid", module);
import { Row, Col } from "antd";

stories.addWithJSX("responsive", () => (
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
));
