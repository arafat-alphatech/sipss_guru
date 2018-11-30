import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link, Redirect } from "react-router-dom";
import "../Styles/Home.css";
import RiwayatUjian from '../Components/RiwayatUjian'
import MenuBawah from "../Components/MenuBawah";
import swal from 'sweetalert'

class Ujian extends Component {
  componentWillMount() {
    const { id_kelas, id_mapel } = this.props;
    this.props.getUjian(id_kelas, id_mapel);
  }
  postNewSoal = () => {
    this.props.postNewUjian().then(() => {
      const route = "/post-soal/" + this.props.id_paket_soal + "/1";
      this.props.history.push(route);
    })
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
    if (id_kelas === "" || id_mapel === "") {
      swal("Pilih kelas dan mata pelajaran dahulu"," ","info");
      return <Redirect to="/ujian" />;
    }
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "20px",
            color: "#39C2C9"
          }}
        >
          Tambah Ujian
        </h3>

        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <h5 style={{ textAlign: "center", marginTop: "20px" }}>
            Kelas &nbsp;
            {listNamaKelas.map((item, key) => {
              if (item.id_kelas === id_kelas) {
                return item.nama_kelas;
              }
            })}
          </h5>

          <h5 style={{ textAlign: "center" }}>
            &nbsp;
            {listMapel.map((item, key) => {
              if (item.id_mapel === id_mapel) {
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
          to="#"
          onClick={() => this.postNewSoal()}
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
          style={{ marginLeft: "10px", marginRight: "10px", marginTop: "30px" }}
        >
        <RiwayatUjian listNamaKelas={listNamaKelas}
                       listMapel={listMapel}
                       id_kelas={id_kelas}
                       id_mapel={id_mapel}
                       listUjian={listUjian}/>
        </div>
        <div style={{marginTop:'80px'}}></div>
        
        {/* footer */}
        <footer
          className="footer"
          style={{
            position: "fixed",
            height: "55px",
            bottom: "0",
            width: "100%"
          }}
        >
          <MenuBawah />
        </footer>
        {/* footer (end) */}
      </div>
    );
  }
}

export default connect(
  "id_kelas, id_mapel, id_paket_soal, listMapel, listNamaKelas, listUjian",
  actions
)(Ujian);
