# Ant Design Theme Editor [![Build Status](https://travis-ci.org/minheq/antd-theme-editor.svg?branch=master)](https://travis-ci.org/minheq/antd-theme-editor)

Boilerplate to render [Ant Design](https://ant.design/) components into [Storybook](https://storybook.js.org/), so you can easily edit the theme

![image](https://user-images.githubusercontent.com/9356633/39115487-fbfb6c6e-470b-11e8-8a45-8a6846118b2e.png)


## Pre-requisite

1. Install required system dependencies
* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

2. Clone the repository
```
git clone https://github.com/minheq/antd-theme-editor.git
```

3. Install package dependencies of the project
```
yarn
```

...and you are ready!

## Usage
Run the command

```
yarn storybook
```

Visit `localhost:6006` to view Storybook

## Customizing theme

### Editing antd default variables

There is ready `src/antd-theme-override.less` for editing **antd default variables**

### Editing css antd classes

You can also edit css file `src/style-override.css` for overriding/editing styles of **antd classes**

## Exporting

After you are done editing the variables and styles, export via this command

```
yarn export
```

The exported files will be found in `dist` directory, copy and use in your project

## Updating stories

Stories are already created based on the antd repository. You can also update them by importing `antd` components via git submodules and running a script to create or update stories.

```
git submodule update --init --recursive // Adds antd submodule to the project
git submodule update --remote --rebase  // Update antd submodule if it is outdated
yarn create-stories                     // Creates the stories
yarn prettier                           // Run prettier code formatting on the created stories
```

The script runs the file `scripts/createStoriesFromAntdDemos.js`.
