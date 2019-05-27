import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.avatar", module);
import { Avatar, Button } from "antd";

class App extends React.Component {
  state = {
    hide: true,
    size: "large",
    scale: 1
  };

  toggle = () => {
    this.setState({
      hide: !this.state.hide
    });
  };

  toggleSize = () => {
    const sizes = ["small", "default", "large"];
    let current = sizes.indexOf(this.state.size) + 1;
    if (current > 2) {
      current = 0;
    }
    this.setState({
      size: sizes[current]
    });
  };

  changeScale = () => {
    this.setState({
      scale: this.state.scale === 1 ? 2 : 1
    });
  };

  render() {
    const { hide, size, scale } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>Toggle Avatar visibility</Button>
        <Button onClick={this.toggleSize}>Toggle Avatar size</Button>
        <Button onClick={this.changeScale}>Change Avatar scale</Button>
        <br />
        <br />
        <div
          style={{
            textAlign: "center",
            transform: `scale(${scale})`,
            marginTop: 24
          }}
        >
          <Avatar
            size={size}
            style={{ background: "#7265e6", display: hide ? "none" : "" }}
          >
            Avatar
          </Avatar>
          <Avatar
            size={size}
            src="invalid"
            style={{ background: "#00a2ae", display: hide ? "none" : "" }}
          >
            Invalid
          </Avatar>
          <div style={{ display: hide ? "none" : "" }}>
            <Avatar size={size} style={{ background: "#7265e6" }}>
              Avatar
            </Avatar>
            <Avatar size={size} src="invalid" style={{ background: "#00a2ae" }}>
              Invalid
            </Avatar>
          </div>
        </div>
      </div>
    );
  }
}

stories.addWithJSX("toggle-debug", () => <App />);
