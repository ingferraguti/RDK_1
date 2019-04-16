import BlockTypeApiGenerated from "./generated/BlockTypeApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BlockTypeApi extends BlockTypeApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get BlockType List
  static getBlockTypeList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/blocktypes")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BlockTypeApi;