import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class RiwayatUjian extends Component {
    state = {
        listDisabled: []
    }

    checkSoal = (id_paket_soal) => {
        // console.log("id_paket_soal",id_paket_soal)
        this.props.getSoalSiapCetak(id_paket_soal).then(() => {
            this.props.checkJumlahSoal()
            let next_soal = this.props.current_jumlah_soal + 1
            if(this.props.current_jumlah_soal < this.props.jumlah_soal){
                this.props.history.push( "/post-soal/" + id_paket_soal + '/' + next_soal )
            } else {
                this.props.history.push( "/review/" + id_paket_soal)
            }
        })
    } 

    checkLJK = () => {
        var disabled = false
        this.props.listUjian.map((item, key) => {
            let data = this.state.listDisabled
            this.props.getSoalSiapCetak(item.id_paket_soal).then(() => {
                this.props.checkJumlahSoal()
                if(this.props.current_jumlah_soal < this.props.jumlah_soal){
                    // belum selesai
                    data.push(true)
                } else {
                    // sudah selesai
                    data.push(false)
                }
            })
            this.setState({
                listDisabled: data
            })
        })

        return disabled
    }
  
    componentDidMount = () => {
        this.checkLJK()
    }

    render() {
        console.log(this.state)
        return (
            <div className="card-body">
                <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Riwayat Ujian
                </h5>
                <h6>
                    &nbsp;
                    {this.props.listNamaKelas.map((item, key) => {
                        if (item.id_kelas === parseInt(this.props.id_kelas)) {
                            return item.nama_kelas;
                        }
                    })}
                    &nbsp; - &nbsp;
                    {this.props.listMapel.map((item, key) => {
                        if (item.id_mapel === parseInt(this.props.id_mapel) ) {
                            return item["mapel.nama_mapel"];
                        }
                    })}
                </h6>

                <div className='row' style={{ marginBottom: '20px' }}>
                    <div className='col-7'><strong>Kode Soal</strong></div>
                    <div className='col-5'><i className="fas fa-print" style={{ color: '#39C2C9' }}></i>&nbsp;<strong>Cetak</strong></div>
                </div>

                {this.props.listUjian.map((item, key) => {
                    let disabled = this.state.listDisabled[key] == undefined ? true : this.state.listDisabled[key]
                    let title = disabled == true ? "Selesaikan terlebih dahulu soal yang di buat" : "Cetak LJK"
                    let url_download =  disabled == true ? "#" : "http://13.251.97.170:5001/build?id_paket_soal=" + item.id_paket_soal + "&id_kelas=" + item.id_kelas
                    return (
                        <div className='row'
                            style={{ marginBottom: '10px' }}
                            key={key}>
                            <div className='col-5'>
                                <Link
                                    to='#'
                                    style={{ color: '#39C2C9' }}
                                    onClick={() => this.checkSoal(item.id_paket_soal)}
                                >
                                    {item["paket_soal.kode_soal"]}
                                </Link>
                            </div>
                            <div className='col-7'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <Link style={{ minWidth: '80px' }} className="btn btn-primary" to={"/review/"+item.id_paket_soal} >
                                        Soal
                                        </Link>
                                    </div>
                                    <div className='col-6'>
                                        <button style={{ minWidth: '80px' }} className="btn btn-primary" disabled={ disabled } title= {title}>
                                            <a
                                                href={ url_download }
                                                style= {{
                                                    textDecoration: "none",
                                                    color: "white"
                                                }}
                                            > 
                                                LJK
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

}

export default connect("current_jumlah_soal, jumlah_soal", actions)(withRouter(RiwayatUjian));
