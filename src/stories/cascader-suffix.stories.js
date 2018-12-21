import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.cascader", module);
import { Cascader, Icon } from "antd";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

function onChange(value) {
  console.log(value);
}

stories.addWithJSX("suffix", () => (
  <div>
    <Cascader
      suffixIcon={<Icon type="smile" />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <Cascader
      suffixIcon="ab"
      style={{ marginTop: "1rem" }}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  </div>
));
