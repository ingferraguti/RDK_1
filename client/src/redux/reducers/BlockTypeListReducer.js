// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function BlockTypeListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BLOCKTYPE_SUCCESS:
      return { ...state, blocktype: action.payload };
    case types.LIST_BLOCKTYPE_SUCCESS:
      return { ...state, listBlockType: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}