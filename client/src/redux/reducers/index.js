import { combineReducers } from "redux";

// START IMPORT REDUCERS
import BlockEditReducer from "./BlockEditReducer";
import BlockListReducer from "./BlockListReducer";
import BlockTypeEditReducer from "./BlockTypeEditReducer";
import BlockTypeListReducer from "./BlockTypeListReducer";
import HomeReducer from "./HomeReducer";
import ItemEditReducer from "./ItemEditReducer";
import ItemListReducer from "./ItemListReducer";
import ItemTypeEditReducer from "./ItemTypeEditReducer";
import ItemTypeListReducer from "./ItemTypeListReducer";
import RoleEditReducer from "./RoleEditReducer";
import RoleListReducer from "./RoleListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	BlockEditReducer,
	BlockListReducer,
	BlockTypeEditReducer,
	BlockTypeListReducer,
	HomeReducer,
	ItemEditReducer,
	ItemListReducer,
	ItemTypeEditReducer,
	ItemTypeListReducer,
	RoleEditReducer,
	RoleListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
