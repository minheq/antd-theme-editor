import { configure } from '@storybook/react';
const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
