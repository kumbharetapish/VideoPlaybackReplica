import React, { Component } from "react";
import loginCss from "./Login.module.css";
import Axios from "axios";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: {} };
    console.log(this.props);
    const status = this.props.status;
  }

  handleGetLogin = e => {
    e.preventDefault();
    const formData = {
      username: e.target.user.value,
      password: e.target.password.value
    };
    Axios.post("http://5d76bf96515d1a0014085cf9.mockapi.io/login", formData)
      .then(response => {
        if (formData.user !== "" && formData.password !== "") {
          console.log("Login Success", response);
          if (response.status === 201) {
            alert("Login");
            this.setState({ userData: formData });
            this.props.handleLogin();
            this.props.history.push("/");
          }
        } else {
          alert("Please filed username and password");
        }
      })
      .catch(err => {
        console.log("failed");
      });
  };
  render() {
    return (
      <div>
        <h2>
          
          <br />
          <br />
          login Page
        </h2>
        {this.props.loginStatus ? (
          <div>
            <h1>{"You are in"}</h1>
          </div>
        ) : (
          <div>
            <h1>Places login in your account. </h1>
            <form
              onSubmit={this.handleGetLogin}
              method="post"
              className={loginCss.form}
            >
              <input type="text" name="user" placeholder="user name" />
              <input type="password" name="password" placeholder="password" />
              <input type="submit" value="Login" />
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: state.counter, loginStatus: state.status };
};
export default connect(mapStateToProps)(Login);
