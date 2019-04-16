// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ItemListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ITEM_SUCCESS:
      return { ...state, item: action.payload };
    case types.LIST_ITEM_SUCCESS:
      return { ...state, listItem: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}