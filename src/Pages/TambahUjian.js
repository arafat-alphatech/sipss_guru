import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link, Redirect } from "react-router-dom";
import "../Styles/Home.css";
import RiwayatUjian from "../Components/RiwayatUjian";
import MenuBawah from "../Components/MenuBawah";
import swal from "sweetalert";
import Media from "react-media";

class Ujian extends Component {
  componentWillMount() {
    const { id_kelas, id_mapel } = this.props;
    this.props.getUjian(id_kelas, id_mapel);
  }
  postNewSoal = () => {
    this.props.postNewUjian().then(() => {
      const route = "/post-soal/" + this.props.id_paket_soal + "/1";
      this.props.history.push(route);
    });
  };
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
      swal("Pilih kelas dan mata pelajaran dahulu", " ", "info");
      return <Redirect to="/ujian" />;
    }
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "20px",
            color: "#00A2E5"
          }}
        >
          Tambah Ujian
        </h3>

        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <h5
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "0px"
            }}
          >
            Kelas &nbsp;
            {listNamaKelas.map((item, key) => {
              if (item.id_kelas === id_kelas) {
                return item.nama_kelas;
              }
            })}
          </h5>

          <h5 style={{ textAlign: "center" }}>
            Mata Pelajaran: &nbsp;
            {listMapel.map((item, key) => {
              if (item.id_mapel === id_mapel) {
                return item["mapel.nama_mapel"];
              }
            })}{" "}
          </h5>

          <Media query="(max-width: 599px)">
            {matches =>
              matches ? (
                <div className="card-body shadow">
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
                      style={{ width: "100%" }}
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
                      style={{ marginTop: "20px", width: "100%" }}
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
              ) : (
                <div className="card-body shadow">
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
                      style={{ width: "100%" }}
                      name="kode_soal"
                      onChange={e => this.props.setField(e)}
                    />
                    <br />
                    {/* Input Kode Soal (end) */}

                    <div className="row">
                      <div className="col-6">
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
                          style={{ marginTop: "20px", width: "100%" }}
                          name="tanggal_ujian"
                          onChange={e => this.props.setField(e)}
                        />
                        {/* Input Jadwal Ujian (end) */}
                      </div>
                      <div className="col-6">
                        {/* select */}
                        <div
                          style={{ marginTop: "20px", marginBottom: "20px" }}
                        >
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
                  </form>
                </div>
              )
            }
          </Media>
        </div>
        {/* Section Input Text (end) */}

        {/* Button Mulai Buat Soal */}
        <div className="text-center" style={{ marginTop: "30px" }}>
          <Link
            className="btn btn-primary"
            to="#"
            onClick={() => this.postNewSoal()}
          >
            Mulai Buat Soal
          </Link>
        </div>

        {/* Button Mulai Buat Soal (end) */}
        <div
          className="card mb-3 shadow"
          style={{ marginLeft: "10px", marginRight: "10px", marginTop: "30px" }}
        >
          <RiwayatUjian
            listNamaKelas={listNamaKelas} 
            listMapel={listMapel}
            id_kelas={id_kelas}
            id_mapel={id_mapel}
            listUjian={listUjian}
          />
        </div>
        <div style={{ marginTop: "80px" }} />

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
