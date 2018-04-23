
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.popover', module);
  import { Popover, Button } from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

stories.addWithJSX('arrow-point-at-center', () => (
    
  <div>
    <Popover placement="topLeft" title={text} content={content}>
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </div>

  ))