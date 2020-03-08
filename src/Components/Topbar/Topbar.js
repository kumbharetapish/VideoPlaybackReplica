import React from "react";
import { Link, Redirect } from "react-router-dom";
import classes from "./Topbar.module.css";
import { connect } from "react-redux";
import { LOGIN_FROM } from "../../Uilit/Route";

const Topbar = props => {
  return (
    <div className={classes.Topbar}>
      <Link to="/" className={classes.MenuItem}>
        Home
      </Link>
      <Link to="#" className={classes.MenuItem}>
        Contact
      </Link>
      <Link to="#" className={classes.MenuItem}>
        About
      </Link>
      <Link to="/history" className={classes.MenuItem}>
        History
      </Link>
      {props.loginStatus ? (
        <button onClick={props.handleLogin} className={classes.MenuItem}>
          {" "}
          Logout{" "}
        </button>
      ) : (
        <Link
          onClick={props.handleLogin}
          className={classes.MenuItem}
          to={LOGIN_FROM}
        >
          Login
        </Link>
      )}
      counter : {props.count}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    count: state.storeCounter.length,
    loginStatus: state.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch({ type: "LOGIN_STATUS" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
