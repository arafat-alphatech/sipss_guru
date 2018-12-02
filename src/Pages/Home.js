import React, { Component } from "react";
import "../Styles/Home.css";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import MenuBawah from "../Components/MenuBawah";
import "../Styles/Home.css";
import axios from "axios";

class Home extends Component {
  state = {
    biodata: [],
    listData: []
  };

  getProfile = () => {
    const token = this.props.token;
    const headers = {
      Authorization: "Bearer " + token
    };
    const url = "https://sipss-api.online/profile";
    axios
      .get(url, { headers })
      .then(response => {
        this.setState({
          biodata: response.data.biodata,
          listData: response.data.data
        });
        console.log("from profile guru", response.data);
      })
      .catch(function(error) {
        //handle error
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProfile();
  }

  render() {
    const listNamaKelas = this.props.listNamaKelas;
    const listMapel = this.props.listMapel;
    const listTingkat = this.props.listTingkat;
    const biodata = this.state.biodata;
    const image = biodata.foto;
    // console.log('isi bio', biodata)
    return (
      <div className="Site" style={{ marginLeft: "10px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#00A2E5",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
          {" "}
          Pilih Kelas
        </h1>

        {/* Section Foto + Nama Guru */}
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "150px", height: "150px" }}
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tom_Cruise_by_Gage_Skidmore.jpg/220px-Tom_Cruise_by_Gage_Skidmore.jpg"
            src={image}
            alt="..."
            className="img-thumbnail"
          />
          <p style={{ marginTop: "10px" }}>{biodata.nama}</p>
        </div>
        {/* Section Foto + Nama Guru (end) */}

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="row">

              <div className="col-md-4">
                {/* Piih Tingkat Kelas */}
                <div style={{ margin: "10px" }}>
                  <select
                    className="form-control"
                    value={listTingkat.id_tingkat}
                    name="id_tingkat"
                    onChange={e => this.props.setField(e)}
                    onClick={() => this.props.getKelas()}
                  >
                    <option>Tingkat Kelas</option>
                    {listTingkat.map((item, key) => {
                      return (
                        <option value={item.id_tingkat} key={key}>
                          {item.nama_tingkat}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* Pilih Kelas (end) */}
              </div>

              <div className="col-md-4">
                {/* Piih Nama Kelas */}
                <div style={{ margin: "10px" }}>
                  <select
                    className="form-control"
                    value={listNamaKelas.id_kelas}
                    name="id_kelas"
                    onChange={e => this.props.setField(e)}
                    onClick={() => this.props.getMaPel()}
                  >
                    <option>Nama Kelas</option>
                    {listNamaKelas.map((item, key) => {
                      return (
                        <option value={item.id_kelas} key={key}>
                          {item.nama_kelas}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* Pilih Nama Kelas (end) */}
              </div>

              <div className="col-md-4">
                {/* Piih Mata Pelajaran */}
                <div style={{ margin: "10px" }}>
                  <select
                    className="form-control"
                    value={listMapel.id_mapel}
                    name="id_mapel"
                    onChange={e => this.props.setField(e)}
                  >
                    <option>Mata Pelajaran</option>
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
              </div>
              
            </div>
          </div>
        </div>

        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <div className="card-body">
            {/* <h5 className="card-title">listMapel.item.</h5> */}
            
            <div>
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
            </div>
            {/* Button Menu Ujian (End) */}

            <div>              
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
              </div>
            {/* Button Menu Jadwal (end) */}
              
            <div>
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
          </div>
          {/* Button Mata Pelajaran (end) */}
        </div>
        {/* div card Kelas (end) */}
        <div style={{ height: "50px" }} />
        <div>
          <footer
            className="footer"
            style={{
              position: "fixed",
              width: "100%",
              height: "55px",
              top: "auto",
              bottom: "0",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <MenuBawah />
          </footer>
        </div>
      </div>
    );
  }
}

export default connect(
  "id_kelas, listMapel, listNamaKelas, id_mapel, is_login, listTingkat, token",
  actions
)(Home);
