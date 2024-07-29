import React from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Correct import path

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Google Books App</h1>
        <Outlet />
      </div>
    </ApolloProvider>
  );
};

export default App;
