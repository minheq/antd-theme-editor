
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('tag', module);
  import { Tag } from 'antd';
const { CheckableTag } = Tag;

class MyTag extends React.Component {
  state = { checked: true };
  handleChange = (checked) => {
    this.setState({ checked });
  }
  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
  }
}

stories.add('checkable', () => (
    
  <div>
    <MyTag>Tag1</MyTag>
    <MyTag>Tag2</MyTag>
    <MyTag>Tag3</MyTag>
  </div>

  ))