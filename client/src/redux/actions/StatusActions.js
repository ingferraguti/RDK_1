import actionsFunction from "./generated/StatusActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import StatusApi from "../../api/StatusApi";
 
 actionsFunction.loadStatusList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return StatusApi
     .getStatusList()
     .then(list => {
       dispatch(actionsFunction.loadStatusSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
