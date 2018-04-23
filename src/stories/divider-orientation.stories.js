
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.divider', module);
  import { Divider } from 'antd';

stories.addWithJSX('orientation', () => (
    
  <div>
    <Divider orientation="left">Left Text</Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <Divider orientation="right">Right Text</Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
  </div>

  ))