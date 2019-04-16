// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function TypeListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TYPE_SUCCESS:
      return { ...state, type: action.payload };
    case types.LIST_TYPE_SUCCESS:
      return { ...state, listType: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}