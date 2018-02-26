import { Tooltip, Button } from 'antd';

const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('tooltip', module);
  stories.add('auto-adjust-overflow', () => (
    
  <div style={wrapStyles}>
    <Tooltip placement="left" title="Prompt Text" getPopupContainer={trigger => trigger.parentElement}>
      <Button>Adjust automatically / 自动调整</Button>
    </Tooltip>
    <br />
    <Tooltip placement="left" title="Prompt Text" getPopupContainer={trigger => trigger.parentElement} autoAdjustOverflow={false}>
      <Button>Ingore / 不处理</Button>
    </Tooltip>
  </div>

  ))