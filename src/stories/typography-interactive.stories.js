import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.typography", module);
import { Typography } from "antd";

const { Paragraph } = Typography;

class Demo extends React.Component {
  state = {
    str: "This is an editable text."
  };

  onChange = str => {
    console.log("Content change:", str);
    this.setState({ str });
  };

  render() {
    return (
      <div>
        <Paragraph editable={{ onChange: this.onChange }}>
          {this.state.str}
        </Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: "Hello, Ant Design!" }}>
          Replace copy text.
        </Paragraph>
      </div>
    );
  }
}

stories.addWithJSX("interactive", () => <Demo />);
