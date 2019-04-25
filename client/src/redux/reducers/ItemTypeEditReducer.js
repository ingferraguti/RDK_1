// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  itemtype: {}
};

// Reducer
export default function ItemTypeEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ITEMTYPE_SUCCESS:
      return { ...state, itemtype: action.payload };
    case types.FINDBYTYPE_ITEM_SUCCESS:
      return { ...state, listItem: action.payload };
    case types.GET_ITEMTYPE_SUCCESS:
      return { ...state, itemtype: action.payload };
    case types.UPDATE_ITEMTYPE_SUCCESS:
      return { ...state, itemtype: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}