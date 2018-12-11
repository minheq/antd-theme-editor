import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.tag", module);
import { Tag } from "antd";

const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ["Movies", "Books", "Music", "Sports"];

class HotTags extends React.Component {
  state = {
    selectedTags: []
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <div>
        <h6 style={{ marginRight: 8, display: "inline" }}>Categories:</h6>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}

stories.addWithJSX("hot-tags", () => <HotTags />);
