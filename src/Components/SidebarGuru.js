import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Face from '@material-ui/icons/Face';
import Kelas from '@material-ui/icons/MeetingRoom';
import Mapel from '@material-ui/icons/LibraryBooks';
import Guru from '@material-ui/icons/PermIdentity';
import Logout from '@material-ui/icons/PowerSettingsNew'
import {withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  logout = () => {

    this.props.signOutHandle()
    localStorage.removeItem('unistorePersist')
    this.props.history.push('/signin')

  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
            <ListItem button component={Link} to='/'>
                <ListItemIcon> <InboxIcon /> </ListItemIcon>
                <ListItemText primary="Dashboard Guru" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/ujian'>
                <ListItemIcon> <Guru style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Ujian" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/dashboard'>
                <ListItemIcon> <Face style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Statistik" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/rekap-nilai'>
                <ListItemIcon> <Kelas style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Rapor" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/profile'>
                <ListItemIcon> <Mapel style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button onClick={() => this.logout()}>
                <ListItemIcon> <Logout style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Keluar" />
            </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}><i className="fas fa-bars"></i></Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect("",actions)(withStyles(styles)(withRouter(TemporaryDrawer)));
