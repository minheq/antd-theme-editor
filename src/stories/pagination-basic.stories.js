
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('pagination', module);
  import { Pagination } from 'antd';

stories.add('basic', () => (
    <Pagination defaultCurrent={1} total={50} />
  ))