import actionsFunction from "./generated/TypeActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TypeApi from "../../api/TypeApi";
 
 actionsFunction.loadTypeList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TypeApi
     .getTypeList()
     .then(list => {
       dispatch(actionsFunction.loadTypeSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
