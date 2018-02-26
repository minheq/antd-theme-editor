const markTwain = require('mark-twain');
const JsonML = require('jsonml.js/lib/utils');
const path = require('path');
const Promise = require('bluebird');
const readFile = require('fs-readfile-promise');
const writeFile = require('node-fs-writefile-promise');
const readDir = require('fs-readdir-promise');
const fs = Promise.promisifyAll(require('fs'));

const getCode = tree => {
  let code;
  const find = node => {
    if (code) return;
    if (!JsonML.isElement(node)) return;
    if (JsonML.getTagName(node) !== 'pre') {
      JsonML.getChildren(node).forEach(find);
      return;
    }
    code = JsonML.getChildren(JsonML.getChildren(node)[0] || '')[0] || '';
  };
  find(tree);
  return code;
};

const compileSimpleDemo = async (code, componentName, fileName) => {
  const fileNameWithoutExtension = fileName.substring(0, fileName.length - 3);
  const renderRegEx = /ReactDOM.render\(([\s\S]*?)\,\s*mountNode/;
  const renderCode = code.match(renderRegEx);

  if (!renderCode) {
    console.log(`Could not compile ${componentName} due to unmatched RegEx`);
    return;
  }
  const imports = code.substring(0, code.indexOf('ReactDOM.render'));

  const storySetup = `
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    const stories = storiesOf('${componentName}', module);
  `;

  const stories = `stories.add('${fileNameWithoutExtension}', () => (
    ${renderCode[1]}
  ))`;

  const file = imports + storySetup + stories;

  await writeStoryFromCode(file, componentName, fileNameWithoutExtension);
};

const compileComplexDemo = async md => {};

const writeStoryFromCode = async (
  file,
  componentName,
  fileNameWithoutExtension
) => {
  await writeFile(
    path.resolve(
      __dirname,
      `../src/stories/${componentName}-${fileNameWithoutExtension}.stories.js`
    ),
    file
  );
};

const processMarkdown = async (markdownFile, componentName, fileName) => {
  const markdown = markTwain(markdownFile);
  const code = getCode(markdown.content);
  const lastLineOfCode = code.substring(code.lastIndexOf('\n'));

  if (lastLineOfCode.includes('ReactDOM')) {
    console.log('Ignoring complex demo');
  } else {
    console.log(`Compiling ${componentName}`);
    await compileSimpleDemo(code, componentName, fileName);
  }
};

const processComponent = async componentName => {
  const componentDemoPath = path.resolve(
    __dirname,
    `../antd/components/${componentName}/demo`
  );

  const fileNames = await readDir(componentDemoPath);

  for (const fileName of fileNames) {
    const markdownFile = await readFile(
      path.resolve(
        __dirname,
        `../antd/components/${componentName}/demo/${fileName}`
      )
    );

    await processMarkdown(markdownFile, componentName, fileName);
  }
};

const createStoriesFromAntdDemos = async () => {
  const dirs = p =>
    fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());
  const directories = dirs(path.resolve(__dirname, '../antd/components'));
  // await processComponent('badge');
  for (const directory of directories) {
    try {
      await processComponent(directory);
    } catch (error) {
      console.log(`Ignoring directory ${directory}`);
    }
  }
};

createStoriesFromAntdDemos().then(() => console.log('Finish'));
