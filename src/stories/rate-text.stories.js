
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.rate', module);
  import { Rate } from 'antd';

class Rater extends React.Component {
  state = {
    value: 3,
  }
  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
    );
  }
}

stories.addWithJSX('text', () => (
    <Rater />
  ))