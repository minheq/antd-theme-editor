import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.affix", module);
import { Affix, Button } from "antd";

class Demo extends React.Component {
  render() {
    return (
      <div
        className="scrollable-container"
        ref={node => {
          this.container = node;
        }}
      >
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
        </div>
      </div>
    );
  }
}

stories.addWithJSX("target", () => <Demo />);
