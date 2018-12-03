import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withRouter, Redirect} from "react-router-dom";
import "../Styles/Home.css";
import { connect } from "unistore/react";
import { actions } from "../store";
import { InputAdornment, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  eye: {
    cursor: 'pointer',
  },
});

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    showPassword: false
  };
  
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  signInHandle = () => {
    this.props.signInHandle( this.state.username, this.state.password)
    this.props.history.push('/')
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  
  render() {  
    const { classes } = this.props;
    // console.log('di Signin is_login', this.props.is_login)

    if(this.props.is_login == true){
      return <Redirect to="/" />
    }

    console.log(this.state)

    return (
    <div className="sign-in" style={{padding:'20px'}}>
        <div className="card mb-3"
            style={{ 
                margin: "50px auto 0 auto",
                maxWidth: "500px"
            }}
        >
        <h1 style={{ textAlign: "center" }}>Sign In</h1>
          <div
          className="card-body"
          >
            <form onSubmit={e => e.preventDefault()}>
              <div
                className="form-label-group"
                style={{
                    maxWidth: "500px",
                    margin: "0 auto"
                }}
              >
                <TextField
                  required
                  name="username"
                  type="text"
                  label="Username"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                />
              </div>

              <div
                className="form-label-group"
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  maxWidth: "500px"
                }}
              >
                <TextField
                  required
                  name="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  label="Password"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                          className={classes.eye}
                          onClick={this.handleClickShowPassword } 
                          >{this.state.showPassword ? <Visibility /> : <VisibilityOff />} </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </div>

              {/* <div className='form-label-group' style={{marginLeft:'auto', marginRight:'auto'}}> */}
              <button
                className="btn btn-primary"
                style={{
                    width: "100%",
                    marginTop:'30px'
                }}
                onClick={() =>
                  this.signInHandle()
                }
              >
                Masuk
              </button>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("token, is_login, login_as",actions)(withStyles(styles)(withRouter(SignIn)));
