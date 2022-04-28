import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from '../routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
