import {ADD_ITEM, UPDATE_ITEM} from '../constants';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const updateItem = index => ({
  type: UPDATE_ITEM,
  payload: index,
});
