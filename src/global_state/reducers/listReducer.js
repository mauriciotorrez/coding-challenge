import {ADD_ITEM, UPDATE_ITEM} from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case UPDATE_ITEM: {
      const index = action.payload.index;
      if (state[index]) {
        state[index] = action.payload;
        return state;
      }
      return state;
    }
    default:
      return state;
  }
};
