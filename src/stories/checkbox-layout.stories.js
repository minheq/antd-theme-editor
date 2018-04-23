import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.checkbox", module);
import { Checkbox, Row, Col } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

stories.addWithJSX("layout", () => (
  <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
));
