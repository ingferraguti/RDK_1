import BlockApiGenerated from "./generated/BlockApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BlockApi extends BlockApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Block List
  static getBlockList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/blocks")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BlockApi;