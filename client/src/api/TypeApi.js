import TypeApiGenerated from "./generated/TypeApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TypeApi extends TypeApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Type List
  static getTypeList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/types")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TypeApi;