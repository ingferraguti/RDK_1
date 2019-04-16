import StatusApiGenerated from "./generated/StatusApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class StatusApi extends StatusApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Status List
  static getStatusList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/statuss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default StatusApi;