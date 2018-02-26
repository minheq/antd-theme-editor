import { Input } from 'antd';
const Search = Input.Search;


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('input', module);
  stories.add('search-input', () => (
    
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br /><br />
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br /><br />
    <Search placeholder="input search text" enterButton="Search" size="large" />
  </div>

  ))