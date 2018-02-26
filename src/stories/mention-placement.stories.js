import { Mention } from 'antd';
const { toString } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}


    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('mention', module);
  stories.add('placement', () => (
    
  <Mention
    style={{ width: '100%' }}
    onChange={onChange}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
    placement="top"
  />

  ))