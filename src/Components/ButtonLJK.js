import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class ButtonLJK extends Component {

    state = {
        disabled: ""
    }

    componentDidMount = () => {
        this.props.getSoalSiapCetak(this.props.paket_soal).then(() => {
            this.props.checkJumlahSoal()
            if(this.props.current_jumlah_soal < this.props.jumlah_soal){
                // belum selesai
                this.setState({disabled: true})
            }else {
                this.setState({disabled: false})
            }
        })
    }

  render() {

    let disabled = this.state.disabled
    let title = disabled == true ? "Selesaikan terlebih dahulu soal yang di buat" : "Cetak LJK"
    let url_download =  disabled == true ? "#" : "http://13.251.97.170:5001/build?id_paket_soal=" + this.props.paket_soal + "&id_kelas=" + this.props.kelas
    
    return (
        <a href={ url_download } style= {{ textDecoration: "none", color: "white" }}> 
            <button style={{ minWidth: '80px' }} className="btn btn-primary" disabled={ disabled } title= {title}>
                LJK
            </button>
        </a>
    )
  }
}

export default connect("current_jumlah_soal, jumlah_soal", actions)(withRouter(ButtonLJK));
