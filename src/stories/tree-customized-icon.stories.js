
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('antDesign.tree', module);
  import { Tree, Icon } from 'antd';
const TreeNode = Tree.TreeNode;

class Demo extends React.Component {
  render() {
    return (
      <Tree
        showIcon
        defaultExpandAll
        defaultSelectedKeys={['0-0-0']}
      >
        <TreeNode icon={<Icon type="smile-o" />} title="parent 1" key="0-0">
          <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-0" />
          <TreeNode
            icon={({ selected }) => (
              <Icon type={selected ? 'frown' : 'frown-o'} />
            )}
            title="leaf"
            key="0-0-1"
          />
        </TreeNode>
      </Tree>
    );
  }
}

stories.addWithJSX('customized-icon', () => (
    <Demo />
  ))