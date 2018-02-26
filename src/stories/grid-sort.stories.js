
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('grid', module);
  import { Row, Col } from 'antd';

stories.add('sort', () => (
    
  <div>
    <Row>
      <Col span={18} push={6}>col-18 col-push-6</Col>
      <Col span={6} pull={18}>col-6 col-pull-18</Col>
    </Row>
  </div>
  ))