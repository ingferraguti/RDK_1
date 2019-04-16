// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import TypeActions from "../redux/actions/TypeActions";

// END IMPORT ACTIONS

/** APIs

* actionsType.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsType.list
*	@description CRUD ACTION list
*

**/


class TypeList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsType.loadTypeList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsType.deleteType(this.state.idDelete).then(data => {
      this.props.actionsType.loadTypeList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "Schema",
        type: "string",
        label: "Schema"
      }, 
      {
        id: "Validation",
        type: "string",
        label: "Validation"
      }, 
      {
        id: "Visualization",
        type: "string",
        label: "Visualization"
      },
    ];
    const link = "/types/";

    return (
      <div>
        <h1>Type List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Schema</TableCell>
              <TableCell align="right">Validation</TableCell>
              <TableCell align="right">Visualization</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/types/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Name }</TableCell>
                <TableCell align="right">{ row.Schema }</TableCell>
                <TableCell align="right">{ row.Validation }</TableCell>
                <TableCell align="right">{ row.Visualization }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/types/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsType: bindActionCreators(TypeActions, dispatch),
  };
};

// Validate types
TypeList.propTypes = { 
  actionsType: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.TypeListReducer.listType
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeList);
