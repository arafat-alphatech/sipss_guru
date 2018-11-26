import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Link, withRouter, Redirect } from "react-router-dom";
import "../Styles/Home.css";
import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    if (this.props.is_login) {
      alert("Selamat datang !");
      return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div className="sign-in">
        <h1 style={{ textAlign: "center" }}>Sign In</h1>
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-label-group" style={{ marginRight: "20px" }}>
            <TextField
              required
              name="username"
              type="text"
              label="Username"
              defaultValue=""
              margin="normal"
              variant="outlined"
              style={{
                marginLeft: "20px",
                minWidth: "320px",
                width: "95%",
                marginRight: "20px"
              }}
              onChange={e => this.inputChange(e)}
            />
          </div>
          <div className="form-label-group" style={{ marginRight: "20px" }}>
            <TextField
              required
              name="password"
              type="password"
              label="Password"
              defaultValue=""
              margin="normal"
              variant="outlined"
              style={{
                marginLeft: "20px",
                minWidth: "320px",
                width: "95%",
                marginRight: "20px"
              }}
              onChange={e => this.inputChange(e)}
            />
          </div>

          <button
            className="btn btn-primary"
            style={{ minWidth: "320px", marginBottom: "10px", margin: "20px" }}
            onClick={() => {
              this.props.signInHandle(this.state.username, this.state.password)
            }
            }
          >
            Masuk
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  "token, is_login, type",
  actions
)(withRouter(SignIn));
