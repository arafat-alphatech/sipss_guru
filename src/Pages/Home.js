import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../Styles/Home.css";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link, Redirect } from "react-router-dom";
import MenuBawah from "../Components/MenuBawah";
import '../Styles/Home.css'

class Home extends Component {
  componentDidMount = () => {
    this.props.getKelas();
    this.props.getMaPel();
  };

  render() {
    const listNamaKelas = this.props.listNamaKelas;
    const listMapel = this.props.listMapel;
    return (
      <div className='Site'>
        <h1
          style={{
            textAlign: "center",
            color: "#39C2C9",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
          {" "}
          Pilih Kelas
        </h1>

        {/* Section Data Guru */}
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tom_Cruise_by_Gage_Skidmore.jpg/220px-Tom_Cruise_by_Gage_Skidmore.jpg"
            alt="..."
            className="img-thumbnail"
          />
          <p style={{ marginTop: "10px" }}>Tom Cruise, S.Pd</p>
        </div>
        {/* Section Data Guru (end) */}

        {/* Piih Kelas */}
        <div style={{ margin: "10px" }}>
          <select
            className="form-control"
            value={listNamaKelas.id_kelas}
            name="id_kelas"
            onChange={e => this.props.setField(e)}
            onClick={() => this.props.getMaPel()}
          >
            <option>Pilih Kelas</option>
            {listNamaKelas.map((item, key) => {
              return (
                <option value={item.id_kelas} key={key}>
                  {item.nama_kelas}
                </option>
              );
            })}
          </select>
        </div>
        {/* Pilih Kelas (end) */}

        {/* div Card Kelas */}
        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <div className="card-body">
            <h5 className="card-title">Mata Pelajaran</h5>

            {/* Piih Mata Pelajaran */}
            <div style={{ marginBottom: "10px" }}>
              <select
                className="form-control"
                value={listMapel.id_mapel}
                name="id_mapel"
                onChange={e => this.props.setField(e)}
              >
                <option>Pilih Mata Pelajaran</option>
                {listMapel.map((item, key) => {
                  return (
                    <option key={key} value={item.id_mapel}>
                      {item["mapel.nama_mapel"]}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Pilih Mata Pelajaran (end) */}

            {/* Button Menu Ujian */}
            <Link
              className="btn btn-primary"
              to="/tambah-ujian"
              style={{
                minWidth: "300px",
                maxWidth: "800px",
                marginBottom: "10px"
              }}
            >
              Ujian
            </Link>
            <br />
            {/* Button Menu Ujian (End) */}

            {/* Button Menu Jadwal */}
            <Link
              className="btn btn-primary"
              style={{
                minWidth: "300px",
                maxWidth: "800px",
                marginBottom: "10px"
              }}
              to="/"
            >
              Jadwal
            </Link>
            <br />
            {/* Button Menu Jadwal (end) */}

            {/* Button Menu Rapor */}
            <Link
              className="btn btn-primary"
              style={{
                minWidth: "300px",
                maxWidth: "800px",
                marginBottom: "10px"
              }}
              to="/"
            >
              Tambah Mata Pelajaran
            </Link>
            <br />
            {/* Button Menu Rapor (end) */}

            {/* Button Mata Pelajaran */}
            <Link
              className="btn btn-primary"
              style={{
                minWidth: "300px",
                maxWidth: "800px",
                marginBottom: "10px"
              }}
              to="/"
            >
              Bantuan
            </Link>
          </div>
          {/* Button Mata Pelajaran (end) */}


         
        
        
        </div>
        {/* div card Kelas (end) */}
        <div style={{height:'50px'}}></div>
        <div>
        <footer
            className="footer"
            style={{ position: "fixed", height: "55px", top:'auto', bottom: "0", width:'500px', marginLeft:'auto', marginRight:'auto'}}
            >
            <MenuBawah />
          </footer>
        </div>
         
      </div>
    );
  }
}

export default connect(
  "id_kelas, listMapel, listNamaKelas, id_mapel, is_login",
  actions
)(Home);
