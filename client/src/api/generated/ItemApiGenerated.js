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
 *  TO CUSTOMIZE APIS IN ItemApiGenerated.js PLEASE EDIT ../ItemApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ItemApiGenerated {

  static contextUrl = properties.endpoint + "/items";

  // CRUD METHODS

  /**
  * ItemService.create
  *   @description CRUD ACTION create
  *
  */
  static createItem(item) {
    return axios.post(ItemApiGenerated.contextUrl, item )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteItem(id) {
    return axios.delete(ItemApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.findByActive
  *   @description CRUD ACTION findByActive
  *   @param Objectid key Id of the resource Active to search
  *
  */
  static findByActive(id) {
    return axios.get(ItemApiGenerated.contextUrl + "/findByActive/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.findByCreated
  *   @description CRUD ACTION findByCreated
  *   @param Integer by start date
  *   @param Integer to end date
  *
  */
  static findByCreated(id) {
    return axios.get(ItemApiGenerated.contextUrl + "/findByCreated/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.findByCreator
  *   @description CRUD ACTION findByCreator
  *   @param Objectid key Id of the resource Creator to search
  *
  */
  static findByCreator(id) {
    return axios.get(ItemApiGenerated.contextUrl + "/findByCreator/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.findByProtected
  *   @description CRUD ACTION findByProtected
  *   @param Objectid key Id of the resource Protected to search
  *
  */
  static findByProtected(id) {
    return axios.get(ItemApiGenerated.contextUrl + "/findByProtected/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.findByType
  *   @description CRUD ACTION findByType
  *   @param Objectid key Id della risorsa Type da cercare
  *
  */
  static findByType(id) {
    return axios.get(ItemApiGenerated.contextUrl + "/findByType/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  static getOneItem(id) {
    return axios.get(ItemApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.getLink
  *   @description CRUD ACTION getLink
  *   @param Objectid id ID of Item from Link
  *
  */
  static getLink(id) {
    return axios.get(ItemApiGenerated.contextUrl + '/' + id + 'getLink' )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.list
  *   @description CRUD ACTION list
  *
  */
  static getItemList() {
    return axios.get(ItemApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ItemService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveItem(item) {
    return axios.post(ItemApiGenerated.contextUrl + "/" + item._id, item )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ItemApiGenerated;
