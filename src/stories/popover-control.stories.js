import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.popover", module);
import { Popover, Button } from "antd";

class App extends React.Component {
  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}

stories.addWithJSX("control", () => <App />);
