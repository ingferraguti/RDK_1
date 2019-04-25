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
import ItemTypeActions from "../redux/actions/ItemTypeActions";

// END IMPORT ACTIONS

/** APIs

* actionsItemType.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsItemType.list
*	@description CRUD ACTION list
*

**/


class ItemTypeList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsItemType.loadItemTypeList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsItemType.deleteItemType(this.state.idDelete).then(data => {
      this.props.actionsItemType.loadItemTypeList();
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
        <h1>ItemType List</h1>

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
    actionsItemType: bindActionCreators(ItemTypeActions, dispatch),
  };
};

// Validate types
ItemTypeList.propTypes = { 
  actionsItemType: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ItemTypeListReducer.listItemType
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemTypeList);
