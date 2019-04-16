// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  block: {}
};

// Reducer
export default function BlockEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BLOCK_SUCCESS:
      return { ...state, block: action.payload };
    case types.GET_BLOCK_SUCCESS:
      return { ...state, block: action.payload };
    case types.LIST_BLOCKTYPE_SUCCESS:
      return { ...state, listBlockType: action.payload };
    case types.LIST_TYPE_SUCCESS:
      return { ...state, listType: action.payload };
    case types.UPDATE_BLOCK_SUCCESS:
      return { ...state, block: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}