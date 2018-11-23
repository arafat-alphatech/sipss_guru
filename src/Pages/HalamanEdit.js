import React, { Component } from 'react';

//Import untuk component2 editor soal
import { EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorSoal from '../Components/EditorSoal'
import '../Styles/EditorSoal.css'


//Import untuk Component UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class HalamanEdit extends Component {
  state = { editorState: EditorState.createEmpty() };
  onChange = editorState => this.setState({ editorState });
  render() {
    const { classes } = this.props;
    return (
      <div className="Halaman Edit">
      <h3 style={{marginLeft:'20px'}}>Soal Nomor 1</h3>
      <div style={{marginLeft:'20px', marginBottom:'20px'}}>
      <EditorSoal/>
      </div>
        <Card style={{minWidth:'500px', marginLeft:'20px', marginRight:'20px', height:'50px', marginBottom:'20px'}}><p style={{marginLeft:'10px'}}>a. </p></Card>
        <Card style={{minWidth:'500px', marginLeft:'20px', marginRight:'20px', height:'50px', marginBottom:'20px'}}><p style={{marginLeft:'10px'}}>b. </p></Card>
        <Card style={{minWidth:'500px', marginLeft:'20px', marginRight:'20px', height:'50px', marginBottom:'20px'}}><p style={{marginLeft:'10px'}}>c. </p></Card>
        <Card style={{minWidth:'500px', marginLeft:'20px', marginRight:'20px', height:'50px', marginBottom:'20px'}}><p style={{marginLeft:'10px'}}>d. </p></Card>
        <Card style={{minWidth:'500px', marginLeft:'20px', marginRight:'20px', height:'50px', marginBottom:'20px'}}><p style={{marginLeft:'10px'}}>e. </p></Card>        
        <Button variant="contained" color="primary" style={{marginLeft:'20px'}}>Simpan dan Lanjutkan</Button>
      </div>
    );
  }
}

export default HalamanEdit;
