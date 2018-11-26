import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class RiwayatUjian extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Riwayat Ujian
                </h5>
                <h6>
                    &nbsp;
                    {this.props.listNamaKelas.map((item, key) => {
                        if (item.id_kelas == this.props.id_kelas) {
                            return item.nama_kelas;
                        }
                    })}
                    &nbsp; - &nbsp;
                    {this.props.listMapel.map((item, key) => {
                        if (item.id_mapel == this.props.id_mapel) {
                            return item["mapel.nama_mapel"];
                        }
                    })}
                </h6>

                <div className='row' style={{ marginBottom: '20px' }}>
                    <div className='col-7'><strong>Kode Soal</strong></div>
                    <div className='col-5'><i className="fas fa-print" style={{ color: '#39C2C9' }}></i>&nbsp;<strong>Cetak</strong></div>
                </div>

                {this.props.listUjian.map((item, key) => {
                    return (
                        <div className='row'
                            style={{ marginBottom: '10px' }}
                            key={key}>
                            <div className='col-5'>
                                <Link
                                    to="/post-soal/1"
                                    onClick={() =>
                                        this.props.getCurrentSoal(item.id_paket_soal)
                                    }
                                    style={{ color: '#39C2C9' }}
                                >
                                    {item["paket_soal.kode_soal"]}-{item.id_paket_soal}
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
                                        <a
                                            href={
                                                "http://13.251.97.170:5001/build?id_paket_soal=" +
                                                item.id_paket_soal +
                                                "&id_kelas=" +
                                                item.id_kelas
                                            }
                                        > 
                                        <button style={{ minWidth: '80px' }} className="btn btn-primary" disabled={false}>
                                        LJK
                                        </button>
                                        </a>
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

export default connect("", actions)(RiwayatUjian);
