import { combineReducers } from "redux";

// START IMPORT REDUCERS
import BlockEditReducer from "./BlockEditReducer";
import BlockEditReducer from "./BlockEditReducer";
import BlockListReducer from "./BlockListReducer";
import BlockTypeEditReducer from "./BlockTypeEditReducer";
import BlockTypeListReducer from "./BlockTypeListReducer";
import HomeReducer from "./HomeReducer";
import ItemEditReducer from "./ItemEditReducer";
import ItemEditReducer from "./ItemEditReducer";
import ItemListReducer from "./ItemListReducer";
import RoleEditReducer from "./RoleEditReducer";
import RoleListReducer from "./RoleListReducer";
import TypeEditReducer from "./TypeEditReducer";
import TypeListReducer from "./TypeListReducer";

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
	BlockEditReducer,
	BlockListReducer,
	BlockTypeEditReducer,
	BlockTypeListReducer,
	HomeReducer,
	ItemEditReducer,
	ItemEditReducer,
	ItemListReducer,
	RoleEditReducer,
	RoleListReducer,
	TypeEditReducer,
	TypeListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
