
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('auto-complete', module);
  import { AutoComplete } from 'antd';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function Complete() {
  return (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  );
}

stories.add('non-case-sensitive', () => (
    <Complete />
  ))