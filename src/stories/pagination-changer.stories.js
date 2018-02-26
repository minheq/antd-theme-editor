import { Pagination } from 'antd';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  stories.add('changer', () => (
    
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />

  ))