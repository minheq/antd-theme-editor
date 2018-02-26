
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('grid', module);
  import { Row, Col } from 'antd';

stories.add('responsive-more', () => (
    
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
  </Row>

  ))