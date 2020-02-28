import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import WatchPage from "./Containers/WatchPage/WatchPage";
import Login from "./Containers/Login/Login";
import { connect } from "react-redux";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Topbar />
        <Switch>
          <Route
            path={"/watch/:id"}
            render={data =>
              props.loginStatus ? (
                <WatchPage {...data} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />{" "}
          } } />
          <Route path={"/login"} component={Login} />
          <Route exact path={"/"} component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = state => {
  return { count: state.counter, loginStatus: state.status };
};
export default connect(mapStateToProps)(App);
