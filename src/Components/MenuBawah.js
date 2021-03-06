import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import Fullscreen from "@material-ui/icons/Fullscreen";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import {withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

const styles = {
  root: {
    width: '100%'
    // position:'fixed'
  }
};

class MenuBawah extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  backHome = () => {
    this.props.history.push('/')
  }

  logout = () => {

    this.props.signOutHandle()
    localStorage.removeItem('unistorePersist')
    this.props.history.push('/signin')

  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      > 
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<Home />}
          onClick={() => this.backHome()}
          />
        <BottomNavigationAction
          label="Fullscreen"
          value="fulscreen"
          icon={<Fullscreen />}
        />
        <BottomNavigationAction
          label="Keluar"
          value="keluar"
          onClick={() => this.logout()}
          icon={<PowerSettingsNew />}
        />
       
      </BottomNavigation>
    );
  }
}

MenuBawah.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect("token, is_login, type",actions)(withStyles(styles)(withRouter(MenuBawah)));
