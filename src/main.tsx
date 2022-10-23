import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
   },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
   </ThemeProvider>,
);
