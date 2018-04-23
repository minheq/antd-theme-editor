
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.mention', module);
  import { Mention } from 'antd';
const { toString } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

stories.addWithJSX('multilines', () => (
    
  <Mention
    style={{ width: '100%', height: 100 }}
    onChange={onChange}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
    multiLines
  />

  ))