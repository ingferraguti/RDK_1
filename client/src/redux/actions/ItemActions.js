import actionsFunction from "./generated/ItemActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ItemApi from "../../api/ItemApi";
 
 actionsFunction.loadItemList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ItemApi
     .getItemList()
     .then(list => {
       dispatch(actionsFunction.loadItemSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
