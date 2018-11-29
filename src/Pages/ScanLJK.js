import React, { Component } from "react";
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { withRouter, Redirect} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from 'axios'

class ScanLJK extends Component {

    state = {
        displayScanner: false
      }
    
    showScanner(){
    this.setState({
        displayScanner: !this.state.displayScanner
    })
    }

    onTakePhoto (data_uri) {
        const url = "https://sipss-api.online/build"
        const body = {
            data_uri: data_uri
        }

        axios
        .post(url, body)
        .then((response) => {
            // berhasil scan nilai
            if(response.data.http_code == 200){
                const { nama_siswa, total_nilai } = response.data.data
                alert("Nama Siswa: " + nama_siswa + "Nilai: " + total_nilai)
            }
            // data siswa udah pernah discan sebelumnya
            if(response.data.http_code == 400){
                alert(response.data.data.message)
            }
            // opencv tidak dapat scan jawaban
            if(response.data.http_code == 404){
                alert(response.data.data.message)
            }
            // console.log(response.data)
        })
        .catch((err) => {
            alert(err)
        })
    }

  render() {  

    return (          
        <div>
            <Camera
            onTakePhoto = { (data_uri) => { this.onTakePhoto(data_uri); } }
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
            isImageMirror = {false}
            isMaxResolution = {true}
            />
        </div>
    );
  }
}

export default connect(
  "token, is_login, type",
  actions
)(withRouter(ScanLJK));
