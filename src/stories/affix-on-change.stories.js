
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('affix', module);
  import { Affix, Button } from 'antd';

stories.add('on-change', () => (
    
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
  ))