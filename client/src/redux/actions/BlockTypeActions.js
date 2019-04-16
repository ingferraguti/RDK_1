import actionsFunction from "./generated/BlockTypeActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import BlockTypeApi from "../../api/BlockTypeApi";
 
 actionsFunction.loadBlockTypeList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return BlockTypeApi
     .getBlockTypeList()
     .then(list => {
       dispatch(actionsFunction.loadBlockTypeSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
