import React, { Component } from "react";
import MainRoute from "./Routes/MainRoute";
import SidebarGuru from "./Components/SidebarGuru";
import { connect } from "unistore/react";
import { actions } from "./store";
import { Redirect, withRouter } from "react-router-dom";

class App extends Component {

  render() {
    if(this.props.is_login !== ""){
      // console.log("is_login", this.props.is_login)
      if (this.props.is_login === false && this.props.location.pathname !== '/signin') {
        return <Redirect to="/signin" />;
      }
    }
    return (
      <div>
        {this.props.location.pathname !== '/signin' ? <SidebarGuru/> : ''}
        <MainRoute />
      </div>
    );
  }
}
export default connect("is_login, login_as",actions)(withRouter(App));
