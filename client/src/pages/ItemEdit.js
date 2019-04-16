// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import ItemActions from "../redux/actions/ItemActions";
import TypeActions from "../redux/actions/TypeActions";

// END IMPORT ACTIONS

/** APIs

* actionsItem.create
*	@description CRUD ACTION create
*
* actionsItem.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsType.list
*	@description CRUD ACTION list
*
* actionsItem.list
*	@description CRUD ACTION list
*
* actionsItem.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class ItemEdit extends Component {
  // Init item
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsItem.loadItem(this.props.match.params.id);
    }
    
    this.props.actionsUser.loadUserList();
    this.props.actionsItem.loadItemList();
    this.props.actionsType.loadTypeList();
  }

  // Insert props item in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      item: props.item
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.item._id) {
      this.props.actionsItem.saveItem(this.state.item).then(data => {
        this.props.history.push("/items/");
      });
    } else {
      this.props.actionsItem.createItem(this.state.item).then(data => {
        this.props.history.push("/items/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Item Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="Active"
                checked={this.state.item.Active || false}
                onChange={Utils.handleChangeCheck.bind(this, "item", "Active")}
                color="primary"
                required
                {...(!this.state.item.Active && this.state.item.Active === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="Active"
            className="mt-20"
          />
          
          
          <TextField
            id="Created"
            label="Created"
            value={this.state.item.Created || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Data"
            label="Data"
            value={this.state.item.Data || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Modified"
            label="Modified"
            value={this.state.item.Modified || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Order"
            label="Order"
            value={this.state.item.Order || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          <FormControlLabel
            control={
              <Switch
                id="Protected"
                checked={this.state.item.Protected || false}
                onChange={Utils.handleChangeCheck.bind(this, "item", "Protected")}
                color="primary"
              />
            }
            label="Protected"
            className="mt-20"
          />
          
          
          <TextField
            id="Status"
            label="Status"
            value={this.state.item.Status || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m Creator with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="Creator">
              Creator
            </InputLabel>
            <Select
              value={this.state.item.Creator || ""}
              onChange={Utils.handleChangeSelect.bind(this, "item")}
              inputProps={{
                id: "Creator",
                name: "Creator"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m Link with Item */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="Link">
              Link
            </InputLabel>
            <Select
              value={this.state.item.Link || ""}
              onChange={Utils.handleChangeSelect.bind(this, "item")}
              inputProps={{
                id: "Link",
                name: "Link"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listItem && this.props.listItem.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m Type with Type */}
          
          <FormControl fullWidth className="mb-20" required
              {...(!this.state.item.Type && !this.state.item.Type
                ? { error: true }
                : {})}>
            <InputLabel shrink htmlFor="Type">
              Type
            </InputLabel>
            <Select
              value={this.state.item.Type || ""}
              onChange={Utils.handleChangeSelect.bind(this, "item")}
              inputProps={{
                id: "Type",
                name: "Type"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listType && this.props.listType.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/items/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsItem: bindActionCreators(ItemActions, dispatch),
    actionsType: bindActionCreators(TypeActions, dispatch),
  };
};

// Validate types
ItemEdit.propTypes = { 
  actionsItem: PropTypes.object.isRequired,
  actionsType: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    item: state.ItemEditReducer.item,
    listUser: state.ItemEditReducer.listUser,
    listItem: state.ItemEditReducer.listItem,
    listType: state.ItemEditReducer.listType
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemEdit);
