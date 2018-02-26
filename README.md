# Ant Design Theme Editor

Boilerplate to render [Ant Design](https://ant.design/) component demos into [Storybook](https://storybook.js.org/), so you can easily edit the theme

![image](https://user-images.githubusercontent.com/9356633/36666319-c65273c0-1b1c-11e8-856e-190503851fc3.png)

## Usage

```
yarn              // install dependencies
yarn storybook    // launch storybook with all antd components
```

Visit `localhost:6006` to view Storybook

**Note**: Stories are already created. It utilizes the script `yarn create-stories` which runs the file `scripts/createStoriesFromAntdDemos.js`

## Customizing theme

### Editing antd default variables

There is ready `src/ant-theme-override.less` for editing **antd default variables**

### Editing css antd classes

You can also edit css file `src/style-override.css` for overriding/editing styles of **antd classes**

## Exporting

After you are done editing the variables and styles, just copy the `ant-theme-override.less` and `src/style-override.css` files for use in your project
