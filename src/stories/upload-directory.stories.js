import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.upload", module);
import { Upload, Button, Icon } from "antd";

stories.addWithJSX("directory", () => (
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <Button>
      <Icon type="upload" /> Upload Directory
    </Button>
  </Upload>
));
