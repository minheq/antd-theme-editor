import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.auto-complete", module);
import { AutoComplete, Input } from "antd";

const { TextArea } = Input;

function onSelect(value) {
  console.log("onSelect", value);
}

class Complete extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value]
    });
  };

  handleKeyPress = ev => {
    console.log("handleKeyPress", ev);
  };

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
      >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{ height: 50 }}
          onKeyPress={this.handleKeyPress}
        />
      </AutoComplete>
    );
  }
}

stories.addWithJSX("custom", () => <Complete />);
