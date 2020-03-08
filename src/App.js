import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import Topbar from "./Components/Topbar/Topbar";
import WatchPage from "./Containers/WatchPage/WatchPage";
import Login from "./Containers/Login/Login";
import History from "./Containers/History/History";
import { WATCH_PAGE_LINK, LOGIN_FROM } from "./Uilit/Route";
function App(props) {
  console.log(props.loginStatus);
  return (
    <BrowserRouter>
      <div>
        <Topbar />
        <Switch>
          <Route
            path={`${WATCH_PAGE_LINK}:id`}
            render={data =>
              props.loginStatus ? (
                <WatchPage {...data} />
              ) : (
                <Redirect to={LOGIN_FROM} />
              )
            }
          />
          <Route path="/history" component={History} />
          <Route path={LOGIN_FROM} component={Login} />
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
