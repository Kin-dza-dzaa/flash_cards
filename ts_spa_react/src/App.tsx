import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from 'antd/lib/layout';
import { Outlet } from 'react-router-dom';
import { AppBar } from './App-bar/app-bar';
import { AuthProvider } from './contexts/AuthProvider/auth-provider';

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  }
);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Layout.Header style={{ "background": "#141414" }}>
            <AppBar />
          </Layout.Header>
          <Layout.Content>
            <Outlet />
          </Layout.Content>
        </Layout>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider >
  );
}
