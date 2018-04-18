import React from "react";
import { configure, addDecorator, setAddon } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import centered from "@storybook/addon-centered";
import { withKnobs } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { BackgroundColor } from "react-storybook-decorator-background";
import { storiesOf } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import JSXAddon from "storybook-addon-jsx";

import "../src/style.less";

setAddon(JSXAddon);

setOptions({
  name: "CRA Kitchen Sink",
  goFullScreen: false,
  showSearchBox: false,
  sortStoriesByKind: true,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: false
});

const antReq = require.context("../src/stories", true, /\.stories\.js$/);
const componentReq = require.context(
  "../src/components",
  true,
  /\.stories\.js$/
);
const viewReq = require.context("../src/views", true, /\.stories\.js$/);

// global decorators
addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(centered);
addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>);
addDecorator(story => (
  <BackgroundColor colors={["#ffffff", "#000000"]} story={story} />
));

function loadStories() {
  antReq.keys().forEach(filename => antReq(filename));
  componentReq.keys().forEach(filename => componentReq(filename));
  viewReq.keys().forEach(filename => viewReq(filename));
}

configure(loadStories, module);
