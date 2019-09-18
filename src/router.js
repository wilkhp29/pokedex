import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {store,persisto} from "./store";
import { isAuthenticated } from "./services/auth";

import Pokedex from "./Views/pokedox";
import Busca from "./Views/busca";
import Login from "./Views/login";
import Lista from "./Views/list";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persisto}>
            <Component {...props} />
          </PersistGate>
        </Provider>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/app" component={Pokedex} />
      <PrivateRoute path="/busca" component={Busca} />
      <PrivateRoute path="/list/:name" component={Lista} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;