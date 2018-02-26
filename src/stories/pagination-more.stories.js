import { Pagination } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  stories.add('more', () => (
    
  <Pagination defaultCurrent={6} total={500} />

  ))