import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.radio", module);
import { Radio } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

stories.addWithJSX("size", () => (
  <div>
    <div>
      <RadioGroup defaultValue="a" size="large">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup defaultValue="a" size="small">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
  </div>
));
