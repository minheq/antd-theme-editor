
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('spin', module);
  import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

stories.add('custom-indicator', () => (
    <Spin indicator={antIcon} />
  ))