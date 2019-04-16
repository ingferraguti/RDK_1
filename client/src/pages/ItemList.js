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
import ItemActions from "../redux/actions/ItemActions";

// END IMPORT ACTIONS

/** APIs

* actionsItem.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsItem.list
*	@description CRUD ACTION list
*

**/


class ItemList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsItem.loadItemList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsItem.deleteItem(this.state.idDelete).then(data => {
      this.props.actionsItem.loadItemList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Active",
        type: "boolean",
        label: "Active"
      }, 
      {
        id: "Created",
        type: "integer",
        label: "Created"
      }, 
      {
        id: "Data",
        type: "string",
        label: "Data"
      }, 
      {
        id: "Modified",
        type: "integer",
        label: "Modified"
      }, 
      {
        id: "Order",
        type: "integer",
        label: "Order"
      }, 
      {
        id: "Protected",
        type: "boolean",
        label: "Protected"
      }, 
      {
        id: "Status",
        type: "string",
        label: "Status"
      },
    ];
    const link = "/items/";

    return (
      <div>
        <h1>Item List</h1>

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
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Modified</TableCell>
              <TableCell align="right">Order</TableCell>
              <TableCell align="right">Protected</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/items/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Active }</TableCell>
                <TableCell align="right">{ row.Created }</TableCell>
                <TableCell align="right">{ row.Data }</TableCell>
                <TableCell align="right">{ row.Modified }</TableCell>
                <TableCell align="right">{ row.Order }</TableCell>
                <TableCell align="right">{ row.Protected }</TableCell>
                <TableCell align="right">{ row.Status }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/items/new">
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
    actionsItem: bindActionCreators(ItemActions, dispatch),
  };
};

// Validate types
ItemList.propTypes = { 
  actionsItem: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ItemListReducer.listItem
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
