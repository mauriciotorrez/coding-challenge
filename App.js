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
import AddItem from './src/components/AddItem';
import {configureStore} from './src/global_state/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainList">
          <Stack.Screen name="MainList" component={MyReduxList} />
          <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
