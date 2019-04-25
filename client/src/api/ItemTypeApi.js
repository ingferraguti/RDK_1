import ItemTypeApiGenerated from "./generated/ItemTypeApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ItemTypeApi extends ItemTypeApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get ItemType List
  static getItemTypeList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/itemtypes")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ItemTypeApi;