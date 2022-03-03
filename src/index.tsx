import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';

import CssBaseline from '@mui/material/CssBaseline';

import { App } from './App';
import { queryClient } from './services/queryClient';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
