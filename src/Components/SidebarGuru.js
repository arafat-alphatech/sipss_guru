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
import DashboardIcon from '@material-ui/icons/Home';
import Stats from '@material-ui/icons/Assessment';
import Rekaps from '@material-ui/icons/ChromeReaderMode';
import Profil from '@material-ui/icons/AccountCircle';
import Ujian from '@material-ui/icons/FormatListNumbered';
import Logout from '@material-ui/icons/PowerSettingsNew'
import {withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logoSIPPS from '../logoSIPSS.png'
import Media from 'react-media'

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
                <ListItemIcon> <DashboardIcon style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/ujian'>
                <ListItemIcon> <Ujian style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Ujian" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/dashboard'>
                <ListItemIcon> <Stats style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Statistik" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/rekap-nilai'>
                <ListItemIcon> <Rekaps style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Rekap Nilai" />
            </ListItem>
        </List>
        <List>
            <ListItem button component={Link} to='/profile'>
                <ListItemIcon> <Profil style={{color:'#00A2E5'}}/> </ListItemIcon>
                <ListItemText primary="Profil" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button onClick={() => this.logout()}>
                <ListItemIcon> <Logout style={{color:'#f22613'}}/> </ListItemIcon>
                <ListItemText primary="Keluar" />
            </ListItem>
        </List>
      </div>
    );

    return (
      <div style={{marginBottom:'70px'}}>
        <AppBar position="fixed">
        <Toolbar style={{background:'linear-gradient(60deg,  #00A2E5, #00B4DB)', width:'100'}}>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Button color="inherit">Login</Button> */}
        <Button onClick={this.toggleDrawer('left', true)}><i className="fas fa-bars" style={{color:'white', fontSize:'large'}}></i></Button>         
        <img className="logo-navbar" src={logoSIPPS}/>
        </Toolbar>
      </AppBar>
        {/* <Button onClick={this.toggleDrawer('left', true)}><i className="fas fa-bars" style={{color:'#00A2E5', fontSize:'large'}}></i></Button> */}
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
