// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  item: {}
};

// Reducer
export default function ItemEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ITEM_SUCCESS:
      return { ...state, item: action.payload };
    case types.GET_ITEM_SUCCESS:
      return { ...state, item: action.payload };
    case types.LIST_ITEMTYPE_SUCCESS:
      return { ...state, listItemType: action.payload };
    case types.LIST_ITEM_SUCCESS:
      return { ...state, listItem: action.payload };
    case types.UPDATE_ITEM_SUCCESS:
      return { ...state, item: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}