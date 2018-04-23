import React from "react";
import { configure, addDecorator, setAddon } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { checkA11y } from "@storybook/addon-a11y";
import { BackgroundColor } from "react-storybook-decorator-background";
import { setOptions } from "@storybook/addon-options";
import centered from "@storybook/addon-centered";

import JSXAddon from "storybook-addon-jsx";

import "../src/style.less";

setAddon(JSXAddon);

setOptions({
  name: "AntDesign Theme Editor",
  url: "https://github.com/minheq/antd-theme-editor",
  sortStoriesByKind: false,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/
});

const antReq = require.context("../src/stories", true, /\.stories\.js$/);

// global decorators
addDecorator(checkA11y);
addDecorator(centered)
addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>);
addDecorator(story => (
  <BackgroundColor colors={["#ffffff", "#000000"]} story={story} />
));

function loadStories() {
  antReq.keys().forEach(filename => antReq(filename));
}

configure(loadStories, module);
