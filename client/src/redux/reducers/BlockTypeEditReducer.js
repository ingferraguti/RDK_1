// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  blocktype: {}
};

// Reducer
export default function BlockTypeEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BLOCKTYPE_SUCCESS:
      return { ...state, blocktype: action.payload };
    case types.GET_BLOCKTYPE_SUCCESS:
      return { ...state, blocktype: action.payload };
    case types.UPDATE_BLOCKTYPE_SUCCESS:
      return { ...state, blocktype: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}