
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.locale-provider', module);
  import { Pagination, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

stories.addWithJSX('basic', () => (
    
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>

  ))