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
import BlockTypeActions from "../redux/actions/BlockTypeActions";

// END IMPORT ACTIONS

/** APIs

* actionsBlockType.create
*	@description CRUD ACTION create
*
* actionsBlockType.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsBlockType.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class BlockTypeEdit extends Component {
  // Init blocktype
  constructor(props) {
    super(props);
    this.state = {
      blocktype: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBlockType.loadBlockType(this.props.match.params.id);
      this.props.actionsBlock.findByBlockType(this.props.match.params.id);
    }
    
  }

  // Insert props blocktype in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      blocktype: props.blocktype
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.blocktype._id) {
      this.props.actionsBlockType.saveBlockType(this.state.blocktype).then(data => {
        this.props.history.push("/blocktypes/");
      });
    } else {
      this.props.actionsBlockType.createBlockType(this.state.blocktype).then(data => {
        this.props.history.push("/blocktypes/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>BlockType Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Code"
            label="Code"
            value={this.state.blocktype.Code || ""}
            onChange={Utils.handleChange.bind(this, "blocktype")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.blocktype.Name || ""}
            onChange={Utils.handleChange.bind(this, "blocktype")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.blocktype.Name && this.state.blocktype.Name === ""
              ? { error: true }
              : {})}
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/blocktypes/">Back to list</Link>

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
    actionsBlockType: bindActionCreators(BlockTypeActions, dispatch),
  };
};

// Validate types
BlockTypeEdit.propTypes = { 
  actionsBlockType: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    blocktype: state.BlockTypeEditReducer.blocktype,
    listBlock: state.BlockTypeEditReducer.listBlock
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockTypeEdit);
