
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('anchor', module);
  import { Anchor } from 'antd';
const { Link } = Anchor;

stories.add('basic', () => (
    
  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>

  ))