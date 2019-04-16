// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  type: {}
};

// Reducer
export default function TypeEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TYPE_SUCCESS:
      return { ...state, type: action.payload };
    case types.FINDBYTYPE_ITEM_SUCCESS:
      return { ...state, listItem: action.payload };
    case types.GET_TYPE_SUCCESS:
      return { ...state, type: action.payload };
    case types.UPDATE_TYPE_SUCCESS:
      return { ...state, type: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}