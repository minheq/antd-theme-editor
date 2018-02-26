
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('back-top', module);
  import { BackTop } from 'antd';

stories.add('basic', () => (
    
  <div>
    <BackTop />
    Scroll down to see the bottom-right
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
    button.
  </div>
  ))