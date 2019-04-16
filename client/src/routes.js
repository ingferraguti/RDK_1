// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import BlockEdit from "./pages/BlockEdit";
import BlockList from "./pages/BlockList";
import BlockTypeEdit from "./pages/BlockTypeEdit";
import BlockTypeList from "./pages/BlockTypeList";
import ItemEdit from "./pages/ItemEdit";
import ItemList from "./pages/ItemList";
import RoleEdit from "./pages/RoleEdit";
import RoleList from "./pages/RoleList";
import TypeEdit from "./pages/TypeEdit";
import TypeList from "./pages/TypeList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/blocks/:id" component={ BlockEdit }  />
              <PrivateRoute exact path="/blocks/:id" component={ BlockEdit }  />
              <PrivateRoute exact path="/blocks" component={ BlockList } roles={[ 'ADMIN', ]}  />
              <PrivateRoute exact path="/blocktypes/:id" component={ BlockTypeEdit }  />
              <PrivateRoute exact path="/blocktypes" component={ BlockTypeList }  />
              <PrivateRoute exact path="/items/:id" component={ ItemEdit }  />
              <PrivateRoute exact path="/items/:id" component={ ItemEdit }  />
              <PrivateRoute exact path="/items" component={ ItemList }  />
              <PrivateRoute exact path="/roles/:id" component={ RoleEdit }  />
              <PrivateRoute exact path="/roles" component={ RoleList }  />
              <PrivateRoute exact path="/types/:id" component={ TypeEdit }  />
              <PrivateRoute exact path="/types" component={ TypeList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;