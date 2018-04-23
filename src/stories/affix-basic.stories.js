
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.affix', module);
  import { Affix, Button } from 'antd';

stories.addWithJSX('basic', () => (
    
  <div>
    <Affix>
      <Button type="primary">Affix top</Button>
    </Affix>
    <br />
    <Affix offsetBottom={0}>
      <Button type="primary">Affix bottom</Button>
    </Affix>
  </div>
  ))