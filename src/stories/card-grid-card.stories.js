import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('card', module);
  stories.add('grid-card', () => (
    
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>

  ))