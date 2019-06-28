import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { loginAction } from "../actions";

class Login extends Component {
  state = {
    loginInfo: {
    username: "",
    password: ""
    }
  };

  handleChange = e => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .loginAction(this.state.loginInfo)
      .then(() => this.props.history.push("/list"));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            value={this.state.loginInfo.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.loginInfo.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        {this.props.loggingIn && (
          <Loader type="Ball-Triangle" height="90" width="60" color="#00BFFF" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { loginAction }
)(Login);
