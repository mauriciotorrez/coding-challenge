import {ADD_ITEM, UPDATE_ITEM} from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case UPDATE_ITEM: {
      return state.map((item, index) => {
          if(item.index === action.payload.index) {
            return {
              ...item,  
              value: action.payload.value,
              displayMode: action.payload.displayMode  
            }
          }
          return item;
        });
    }
    default:
      return state;
  }
};
