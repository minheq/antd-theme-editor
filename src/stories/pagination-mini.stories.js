import { Pagination } from 'antd';

function showTotal(total) {
  return `Total ${total} items`;
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  stories.add('mini', () => (
    
  <div>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
  </div>

  ))