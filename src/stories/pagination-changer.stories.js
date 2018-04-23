
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.pagination', module);
  import { Pagination } from 'antd';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

stories.addWithJSX('changer', () => (
    
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />

  ))