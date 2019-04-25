import actionsFunction from "./generated/ItemTypeActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ItemTypeApi from "../../api/ItemTypeApi";
 
 actionsFunction.loadItemTypeList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ItemTypeApi
     .getItemTypeList()
     .then(list => {
       dispatch(actionsFunction.loadItemTypeSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
