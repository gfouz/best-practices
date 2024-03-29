import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
//import { ChakraProvider } from '@chakra-ui/react';
import Loader from 'components/Loader';
import { HashRouter, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </HashRouter>
      </QueryClientProvider>
    </>
  </React.StrictMode>,
);
