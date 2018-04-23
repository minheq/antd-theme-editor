import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.anchor", module);
import { Anchor } from "antd";
const { Link } = Anchor;

stories.addWithJSX("basic", () => (
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
));
