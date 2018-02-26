# Ant Design Theme Editor

Boilerplate to render [Ant Design](https://ant.design/) components into [Storybook](https://storybook.js.org/), so you can easily edit the theme

![image](https://user-images.githubusercontent.com/9356633/36666319-c65273c0-1b1c-11e8-856e-190503851fc3.png)

## Usage

```
git clone https://github.com/minheq/antd-theme-editor.git
yarn
yarn storybook
```

Visit `localhost:6006` to view Storybook

## Customizing theme

### Editing antd default variables

There is ready `src/ant-theme-override.less` for editing **antd default variables**

### Editing css antd classes

You can also edit css file `src/style-override.css` for overriding/editing styles of **antd classes**

## Exporting

After you are done editing the variables and styles, just copy the `ant-theme-override.less` and `src/style-override.css` files for use in your project

## Updating stories

Stories are already created based on the antd components. You can also update them by importing `antd` components via git submodules.

```
git submodule update --init --recursive // Adds antd submodule to the project
yarn create-stories                     // Creates the stories
```

The script runs the file `scripts/createStoriesFromAntdDemos.js` to create/update stories
