import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Fullscreen from "@material-ui/icons/Fullscreen";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

const styles = {
  root: {
    width: 500
  }
};

class MenuBawah extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Kembali"
          value="recents"
          icon={<ArrowBackIos />}
        />
        <BottomNavigationAction
          label="Fullscreen"
          value="fulscreen"
          icon={<Fullscreen />}
        />
        <BottomNavigationAction
          label="Keluar"
          value="keluar"
          icon={<PowerSettingsNew />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<Icon>folder</Icon>}
        />
      </BottomNavigation>
    );
  }
}

MenuBawah.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBawah);
