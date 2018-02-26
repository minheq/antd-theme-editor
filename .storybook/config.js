import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const req = require.context('../src/stories', true, /\.stories\.js$/);

addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
