import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TabNavigator from './navigator/tab';

const CONTENFUL_SPACE = 'ldcl3ayg0mhx';
const CONTENFUL_ACCESS_TOKEN = '93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENFUL_SPACE}`,
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${CONTENFUL_ACCESS_TOKEN}`
  }
});

const initialState = {
  action: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU': {
      return { action: 'openMenu' };
    }

    case 'CLOSE_MENU': {
      return { action: 'closeMenu' };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
