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
import BlockActions from "../redux/actions/BlockActions";
import BlockTypeActions from "../redux/actions/BlockTypeActions";
import ItemTypeActions from "../redux/actions/ItemTypeActions";

// END IMPORT ACTIONS

/** APIs

* actionsBlock.create
*	@description CRUD ACTION create
*
* actionsBlock.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsBlockType.list
*	@description CRUD ACTION list
*
* actionsItemType.list
*	@description CRUD ACTION list
*
* actionsBlock.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class BlockEdit extends Component {
  // Init block
  constructor(props) {
    super(props);
    this.state = {
      block: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBlock.loadBlock(this.props.match.params.id);
    }
    
    this.props.actionsBlockType.loadBlockTypeList();
    this.props.actionsType.loadTypeList();
  }

  // Insert props block in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      block: props.block
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.block._id) {
      this.props.actionsBlock.saveBlock(this.state.block).then(data => {
        this.props.history.push("/blocks/");
      });
    } else {
      this.props.actionsBlock.createBlock(this.state.block).then(data => {
        this.props.history.push("/blocks/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Block Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="Actyve"
                checked={this.state.block.Actyve || false}
                onChange={Utils.handleChangeCheck.bind(this, "block", "Actyve")}
                color="primary"
                required
                {...(!this.state.block.Actyve && this.state.block.Actyve === ""
                  ? { error: true }
                  : {})}
              />
            }
            label="Actyve"
            className="mt-20"
          />
          
          
          <TextField
            id="FontendAPIHook"
            label="FontendAPIHook"
            value={this.state.block.FontendAPIHook || ""}
            onChange={Utils.handleChange.bind(this, "block")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m BlockType with BlockType */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="BlockType">
              BlockType
            </InputLabel>
            <Select
              value={this.state.block.BlockType || ""}
              onChange={Utils.handleChangeSelect.bind(this, "block")}
              inputProps={{
                id: "BlockType",
                name: "BlockType"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listBlockType && this.props.listBlockType.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m ItemType with Type */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="ItemType">
              ItemType
            </InputLabel>
            <Select
              value={this.state.block.ItemType || ""}
              onChange={Utils.handleChangeSelect.bind(this, "block")}
              inputProps={{
                id: "ItemType",
                name: "ItemType"
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
            <Link to="/blocks/">Back to list</Link>

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
    actionsBlock: bindActionCreators(BlockActions, dispatch),
    actionsBlockType: bindActionCreators(BlockTypeActions, dispatch),
  };
};

// Validate types
BlockEdit.propTypes = { 
  actionsBlock: PropTypes.object.isRequired,
  actionsBlockType: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    block: state.BlockEditReducer.block,
    listBlockType: state.BlockEditReducer.listBlockType,
    listType: state.BlockEditReducer.listType
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockEdit);
