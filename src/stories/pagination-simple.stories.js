import { Pagination } from 'antd';


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  stories.add('simple', () => (
    
  <Pagination simple defaultCurrent={2} total={50} />

  ))