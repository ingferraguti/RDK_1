/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN ItemTypeApiGenerated.js PLEASE EDIT ../ItemTypeApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ItemTypeApiGenerated {

  static contextUrl = properties.endpoint + "/types";

  // CRUD METHODS

  /**
  * ItemTypeService.create
  *   @description CRUD ACTION create
  *
  */
  static createItemType(itemtype) {
    return axios.post(ItemTypeApiGenerated.contextUrl, itemtype )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemTypeService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteItemType(id) {
    return axios.delete(ItemTypeApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemTypeService.findByName
  *   @description CRUD ACTION findByName
  *   @param Objectid key Id of the resource Name to search
  *
  */
  static findByName(id) {
    return axios.get(ItemTypeApiGenerated.contextUrl + "/findByName/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemTypeService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  static getOneItemType(id) {
    return axios.get(ItemTypeApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemTypeService.list
  *   @description CRUD ACTION list
  *
  */
  static getItemTypeList() {
    return axios.get(ItemTypeApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemTypeService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveItemType(itemtype) {
    return axios.post(ItemTypeApiGenerated.contextUrl + "/" + itemtype._id, itemtype )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ItemTypeApiGenerated;
