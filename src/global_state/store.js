import {createStore} from 'redux';
import listReducer from './reducers/listReducer';

export const configureStore = () => {
  const reduxStore = createStore(listReducer);
  return reduxStore;
};
