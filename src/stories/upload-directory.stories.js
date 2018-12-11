import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.upload", module);
import { Upload, Button, Icon } from "antd";

stories.addWithJSX("directory", () => (
  <Upload action="//jsonplaceholder.typicode.com/posts/" directory>
    <Button>
      <Icon type="upload" /> Upload Directory
    </Button>
  </Upload>
));
