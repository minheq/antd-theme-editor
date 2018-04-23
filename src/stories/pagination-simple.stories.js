
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.pagination', module);
  import { Pagination } from 'antd';

stories.addWithJSX('simple', () => (
    
  <Pagination simple defaultCurrent={2} total={50} />

  ))