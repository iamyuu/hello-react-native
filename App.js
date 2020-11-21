import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TabNavigator from './navigator/tab';

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
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
