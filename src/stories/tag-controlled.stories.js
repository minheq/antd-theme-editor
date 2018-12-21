import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.tag", module);
import { Tag, Button } from "antd";

class Demo extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button
          size="small"
          onClick={() => this.setState({ visible: !this.state.visible })}
        >
          Toggle
        </Button>
      </div>
    );
  }
}

stories.addWithJSX("controlled", () => <Demo />);
