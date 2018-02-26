
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('card', module);
  import { Card, Col, Row } from 'antd';

stories.add('in-column', () => (
    
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
    </Row>
  </div>

  ))