import ItemApiGenerated from "./generated/ItemApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ItemApi extends ItemApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Item List
  static getItemList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/items")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ItemApi;