import React, { Component } from "react";
import MainRoute from "./Routes/MainRoute";
import Sidebar from "./Components/Sidebar";
import { connect } from "unistore/react";
import { actions } from "./store";
import { Redirect, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    if (localStorage.getItem('is_login') == 'false' && this.props.location.pathname !== '/signin') {
      return <Redirect to={{ pathname: "/signin" }} />;
    }
    return (
      <div>
        {
          // this.props.type === "admin" ? 
          1 == 1?
          <Sidebar />
          : 
          ''
          // <SidebarGuru/> 
        }
        <MainRoute />
      </div>
    );
  }
}
export default connect("is_login",actions)(withRouter(App));
