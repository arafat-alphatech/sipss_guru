import React, { Component } from "react";
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { withRouter, Redirect} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from 'axios'
import swal from 'sweetalert'

class ScanLJK extends Component {

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
                swal({
                    title: "Berhasil",
                    text: "Nama siswa: " + nama_siswa + "\nNilai: " + total_nilai,
                    icon: "success",
                    });
                
            }
            // data siswa udah pernah discan sebelumnya
            if(response.data.http_code == 400){
                swal({
                    title: "Gagal",
                    text: response.data.data.message,
                    icon: "warning",
                    dangerMode: "true"
                    });
            }
            // opencv tidak dapat scan jawaban
            if(response.data.http_code == 404){
                swal({
                    title: "Gagal",
                    text: response.data.data.message,
                    icon: "warning",
                    dangerMode: "true"
                    });
                
            }
            // console.log(response.data)
        })
        .catch((err) => {
            swal({
                title: "Error",
                text: err,
                icon: "warning",
                dangerMode: "true"
                });
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
