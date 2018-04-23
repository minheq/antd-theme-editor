
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.button', module);
  import { Button } from 'antd';

stories.addWithJSX('disabled', () => (
    
  <div>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(disabled)</Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button ghost>Ghost</Button>
    <Button ghost disabled>Ghost(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(disabled)</Button>
  </div>
  ))