
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('locale-provider', module);
  import { Pagination, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

stories.add('basic', () => (
    
  <LocaleProvider locale={enUS}>
    <App />
  </LocaleProvider>

  ))