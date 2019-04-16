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
import TypeActions from "../redux/actions/TypeActions";
import ItemActions from "../redux/actions/ItemActions";

// END IMPORT ACTIONS

/** APIs

* actionsType.create
*	@description CRUD ACTION create
*
* actionsItem.findByType
*	@description CRUD ACTION findByType
*	@param Objectid key - Id della risorsa Type da cercare
*
* actionsType.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsType.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class TypeEdit extends Component {
  // Init type
  constructor(props) {
    super(props);
    this.state = {
      type: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsType.loadType(this.props.match.params.id);
      this.props.actionsBlock.findByItemType(this.props.match.params.id);
      this.props.actionsItem.findByType(this.props.match.params.id);
    }
    
  }

  // Insert props type in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      type: props.type
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.type._id) {
      this.props.actionsType.saveType(this.state.type).then(data => {
        this.props.history.push("/types/");
      });
    } else {
      this.props.actionsType.createType(this.state.type).then(data => {
        this.props.history.push("/types/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Type Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Name"
            label="Name"
            value={this.state.type.Name || ""}
            onChange={Utils.handleChange.bind(this, "type")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Schema"
            label="Schema"
            value={this.state.type.Schema || ""}
            onChange={Utils.handleChange.bind(this, "type")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Validation"
            label="Validation"
            value={this.state.type.Validation || ""}
            onChange={Utils.handleChange.bind(this, "type")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Visualization"
            label="Visualization"
            value={this.state.type.Visualization || ""}
            onChange={Utils.handleChange.bind(this, "type")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Block */}
          
          <h3>Block</h3>
          {(!this.props.listBlock || this.props.listBlock.length === 0) && 
            <div>No Block associated</div>
          }
          {this.props.listBlock &&
            this.props.listBlock.map((item, i) => {
              return (
                <Link to={"/blocks/" + item._id} key={item._id}>
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
    actionsType: bindActionCreators(TypeActions, dispatch),
    actionsItem: bindActionCreators(ItemActions, dispatch),
  };
};

// Validate types
TypeEdit.propTypes = { 
  actionsType: PropTypes.object.isRequired,
  actionsItem: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    type: state.TypeEditReducer.type,
    listBlock: state.TypeEditReducer.listBlock,
    listItem: state.TypeEditReducer.listItem
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeEdit);
