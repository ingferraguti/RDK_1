import actionsFunction from "./generated/BlockActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import BlockApi from "../../api/BlockApi";
 
 actionsFunction.loadBlockList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return BlockApi
     .getBlockList()
     .then(list => {
       dispatch(actionsFunction.loadBlockSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
