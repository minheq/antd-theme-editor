
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  import { Pagination } from 'antd';

stories.add('simple', () => (
    
  <Pagination simple defaultCurrent={2} total={50} />

  ))