import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Box } from '@mui/material';
import { CarbonEmissionForm } from './components/CarbonEmissionForm';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <CarbonEmissionForm />
      </Box>
    </QueryClientProvider>
  );
}

