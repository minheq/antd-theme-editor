import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  } else if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  stories.add('itemRender', () => (
    
  <Pagination total={500} itemRender={itemRender} />

  ))