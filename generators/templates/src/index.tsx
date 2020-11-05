import React from 'react';
import { render } from 'react-dom';
import fastclick from 'fastclick';

import App from './app';

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      fastclick.attach(document.body);
    },
    false,
  );
}

render(<App />, document.getElementById('root'));
