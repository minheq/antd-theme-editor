import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.upload", module);
import { Upload, Button, Icon } from "antd";

const fileList = [
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  },
  {
    uid: "-2",
    name: "yyy.png",
    status: "done",
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  }
];

const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  defaultFileList: [...fileList]
};

const props2 = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  defaultFileList: [...fileList],
  className: "upload-list-inline"
};

stories.addWithJSX("picture-style", () => (
  <div>
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
    <br />
    <br />
    <Upload {...props2}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
  </div>
));
