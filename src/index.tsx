import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MantineThemeProvider from './MantineThemeProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <MantineThemeProvider />
   
  </React.StrictMode>
);

