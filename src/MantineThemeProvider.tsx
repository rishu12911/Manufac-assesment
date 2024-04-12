// MantineThemeProvider.tsx

import React from 'react';
import { MantineProvider } from '@mantine/core';
import App from './App';

const MantineThemeProvider: React.FC = () => {
  return (
    <MantineProvider>
      <App />
    </MantineProvider>
  );
};

export default MantineThemeProvider;
