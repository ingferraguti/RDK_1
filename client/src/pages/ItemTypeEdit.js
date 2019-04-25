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

// Custom Actions


// START IMPORT ACTIONS
import ItemTypeActions from "../redux/actions/ItemTypeActions";
import ItemActions from "../redux/actions/ItemActions";

// END IMPORT ACTIONS

/** APIs

* actionsItemType.create
*	@description CRUD ACTION create
*
* actionsItem.findByType
*	@description CRUD ACTION findByType
*	@param Objectid key - Id della risorsa Type da cercare
*
* actionsItemType.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsItemType.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class ItemTypeEdit extends Component {
  // Init itemtype
  constructor(props) {
    super(props);
    this.state = {
      itemtype: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsItemType.loadItemType(this.props.match.params.id);
      this.props.actionsBlockType.findByItemType(this.props.match.params.id);
      this.props.actionsItem.findByType(this.props.match.params.id);
    }
    
  }

  // Insert props itemtype in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      itemtype: props.itemtype
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.itemtype._id) {
      this.props.actionsItemType.saveItemType(this.state.itemtype).then(data => {
        this.props.history.push("/types/");
      });
    } else {
      this.props.actionsItemType.createItemType(this.state.itemtype).then(data => {
        this.props.history.push("/types/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>ItemType Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Name"
            label="Name"
            value={this.state.itemtype.Name || ""}
            onChange={Utils.handleChange.bind(this, "itemtype")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Schema"
            label="Schema"
            value={this.state.itemtype.Schema || ""}
            onChange={Utils.handleChange.bind(this, "itemtype")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Validation"
            label="Validation"
            value={this.state.itemtype.Validation || ""}
            onChange={Utils.handleChange.bind(this, "itemtype")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Visualization"
            label="Visualization"
            value={this.state.itemtype.Visualization || ""}
            onChange={Utils.handleChange.bind(this, "itemtype")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with BlockType */}
          
          <h3>BlockType</h3>
          {(!this.props.listBlockType || this.props.listBlockType.length === 0) && 
            <div>No BlockType associated</div>
          }
          {this.props.listBlockType &&
            this.props.listBlockType.map((item, i) => {
              return (
                <Link to={"/blocktypes/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Item */}
          
          <h3>Item</h3>
          {(!this.props.listItem || this.props.listItem.length === 0) && 
            <div>No Item associated</div>
          }
          {this.props.listItem &&
            this.props.listItem.map((item, i) => {
              return (
                <Link to={"/items/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/types/">Back to list</Link>

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
    actionsItemType: bindActionCreators(ItemTypeActions, dispatch),
    actionsItem: bindActionCreators(ItemActions, dispatch),
  };
};

// Validate types
ItemTypeEdit.propTypes = { 
  actionsItemType: PropTypes.object.isRequired,
  actionsItem: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    itemtype: state.ItemTypeEditReducer.itemtype,
    listBlockType: state.ItemTypeEditReducer.listBlockType,
    listItem: state.ItemTypeEditReducer.listItem
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemTypeEdit);
