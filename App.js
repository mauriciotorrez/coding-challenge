/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import MyReduxList from './src/components/MyReduxList';
import {configureStore} from './src/global_state/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MyReduxList />
    </Provider>
  );
};

export default App;
