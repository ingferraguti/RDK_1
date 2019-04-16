// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function BlockListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BLOCK_SUCCESS:
      return { ...state, block: action.payload };
    case types.LIST_BLOCK_SUCCESS:
      return { ...state, listBlock: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}