
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.pagination', module);
  import { Pagination } from 'antd';

stories.addWithJSX('more', () => (
    
  <Pagination defaultCurrent={6} total={500} />

  ))