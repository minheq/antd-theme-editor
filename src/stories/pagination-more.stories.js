
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  import { Pagination } from 'antd';

stories.add('more', () => (
    
  <Pagination defaultCurrent={6} total={500} />

  ))