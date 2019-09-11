import React from 'react';
import { render } from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });

render(<App />, document.getElementById('root'));
