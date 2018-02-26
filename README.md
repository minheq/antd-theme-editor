# Ant Design Theme Editor

Quickly edit and preview ant design theme and css styles overrides.

![image](https://user-images.githubusercontent.com/9356633/36664575-ad8466c8-1b17-11e8-8deb-40600aee856e.png)

## Usage

```
yarn              // install dependencies
yarn storybook    // launch storybook with all antd components
```

Visit `localhost:6006` to view Storybook

Note: Stories are already created. It utilizes the script `yarn create-stories` which runs the file `scripts/createStoriesFromAntdDemos.js`

## Customizing theme

### Editing antd default variables

There is ready `src/ant-theme-override.less` for editing **antd default variables**

### Editing css antd classes

You can also edit css file `src/style-override.css` for overriding/editing styles of **antd classes**
