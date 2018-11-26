import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import axios from "axios";

class Ujian extends Component {
  componentWillMount() {
    const { id_kelas, id_mapel } = this.props;
    this.props.getUjian(id_kelas, id_mapel);
  }

  render() {
    const {
      id_kelas,
      id_mapel,
      listMapel,
      listNamaKelas,
      listUjian
    } = this.props;
    // console.log(listUjian)
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "20px",
            color:'#39C2C9'
          }}
        >
          Tambah Ujian
        </h3>

        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <h5 style={{ textAlign: "center", marginTop:'20px'}}>
            Kelas &nbsp;
            {listNamaKelas.map((item, key) => {
              if (item.id_kelas == id_kelas) {
                return item.nama_kelas;
              }
            })}
          </h5>

          <h5 style={{ textAlign: "center" }}>
            &nbsp;
            {listMapel.map((item, key) => {
              if (item.id_mapel == id_mapel) {
                return item["mapel.nama_mapel"];
              }
            })}{" "}
          </h5>

          <div className="card-body">
            {/* Form Input Text */}
            <form>
              {/* Input Kode Soal */}
              <TextField
                required
                id="outlined-required"
                label="Kode Soal"
                defaultValue=""
                margin="normal"
                variant="outlined"
                style={{ minWidth: "300px", width: "100%" }}
                name="kode_soal"
                onChange={e => this.props.setField(e)}
              />
              <br />
              {/* Input Kode Soal (end) */}

              {/* Input Jadwal Ujian */}
              <TextField
                required
                id="date"
                label="Jadwal"
                type="datetime-local"
                defaultValue="2018-11-25T10:30"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                style={{ minWidth: "300px", marginTop: "20px", width: "100%" }}
                name="tanggal_ujian"
                onChange={e => this.props.setField(e)}
              />
              {/* Input Jadwal Ujian (end) */}
            </form>

            {/* select */}
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <select
                className="form-control"
                name="jumlah_soal"
                onChange={e => this.props.setField(e)}
              >
                <option>Jumlah Soal</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">45</option>
              </select>
            </div>
            {/* select end */}
          </div>
        </div>
        {/* Section Input Text (end) */}

        {/* Button Mulai Buat Soal */}
        <Link
          className="btn btn-primary"
          to="/post-soal/1"
          onClick={() => this.props.postNewUjian()}
          style={{
            minWidth: "340px",
            maxWidth: "800px",
            marginLeft: "10px",
            marginTop: "0px"
          }}
        >
          Mulai Buat Soal
        </Link>

        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px", marginTop:'30px' }}
        >
          {/* Isi card riwayat ujian */}
          <div className="card-body">
            <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
              Riwayat Ujian
              <h6>
                &nbsp;
                {listNamaKelas.map((item, key) => {
                  if (item.id_kelas == id_kelas) {
                    return item.nama_kelas;
                  }
                })}
                &nbsp; - &nbsp;
                {listMapel.map((item, key) => {
                  if (item.id_mapel == id_mapel) {
                    return item["mapel.nama_mapel"];
                  }
                })}
              </h6>
            </h5>
            
            <div className='row' style={{marginBottom:'20px'}}>
                <div className='col-7'><strong>Kode Soal</strong></div>
                <div className='col-5'><i class="fas fa-print" style={{color:'#39C2C9'}}></i>&nbsp;<strong>Cetak</strong></div>
            </div>

            {listUjian.map((item, key) => {
              return (
                <div className='row' 
                style={{marginBottom:'10px'}}
                key={key}>
                <div className='col-5'>
                  <Link
                    to="/post-soal/1"
                    onClick={() =>
                      this.props.getCurrentSoal(item.id_paket_soal)
                    }
                    style={{color:'#39C2C9'}}
                  >
                    {item["paket_soal.kode_soal"]}-{item.id_paket_soal}
                  </Link>
                  </div>
                  <div className='col-7'>
                    <div className='row'>
                      <div className='col-6'>
                  <a
                    href={
                      "http://13.251.97.170:5001/build?id_paket_soal=" +
                      item.id_paket_soal +
                      "&id_kelas=" +
                      item.id_kelas
                    }
                    className="btn btn-primary"
                    style={{minWidth:'80px'}}
                  >
                    Soal
                  </a>
                      
                      </div>
                      <div className='col-6'>
                      <a 
                    href={
                      "http://13.251.97.170:5001/build?id_paket_soal=" +
                      item.id_paket_soal +
                      "&id_kelas=" +
                      item.id_kelas
                    }
                    
                    
                  > <button style={{minWidth:'80px'}} className="btn btn-primary" disabled={false}>LJK</button>
                    
                  </a>
                      </div>
                    </div>

                  
                  </div>
                </div>
              );
            })}

            {/* Isi card riwayat ujian (end) */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "id_kelas, id_mapel, listMapel, listNamaKelas, listUjian",
  actions
)(Ujian);
