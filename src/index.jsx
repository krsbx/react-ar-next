import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import ARProvider from './components/ARProvider';

ReactDOM.render(
  <React.StrictMode>
    <ARProvider>
      <Example />
    </ARProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
