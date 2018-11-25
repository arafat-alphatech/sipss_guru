import React, { Component } from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import {Link} from 'react-router-dom'
import '../Styles/Home.css'

class ReviewSoal extends Component {
  componentDidMount = () => {
    this.props.getKelas();
  };
  render() {
    const listNamaKelas = this.props.listNamaKelas;
    return (
      <div>
        <div style={{ margin: "20px" }}>
          <select class="form-control">
            <option>Navigasi Soal</option>
            {listNamaKelas.map((item, key) => {
              return <option value={item.id_kelas}>{item.nama_kelas}</option>;
            })}
          </select>
        </div>

        <div className="card mb-3" style={{ margin: "20px" }}>
          <div className="card-body">
            <div className="isi-soal">
              Perhatikan alat pengukuran jangka sorong berikut!
              <img
                src="https://i2.wp.com/www.studiobelajar.com/wp-content/uploads/2017/02/contoh-soal-cara-membaca.jpeg?"
                style={{ maxWidth: "280px", maxHeight: "100px" }}
              />
              Hasil pengukuran dari jangka sorong tersebut adalah ... mm
            </div>
            <div className="pilihan-jawaban">
              <p style={{ marginBottom: "0px" }}>a. 10,4</p>
              <p style={{ marginBottom: "0px" }}>b. 11,6</p>
              <p style={{ marginBottom: "0px" }}>c. 11,3</p>
              <p style={{ marginBottom: "0px" }}>d. 12,1</p>
              <p style={{ marginBottom: "0px" }}>e. 10,9</p>
            </div>
          </div>
        </div>
        <Link
          className='btn btn-primary'
          style={{
            minWidth: "320px",
            maxWidth: "800px",
            margin: "20px"
          }}
          to='#'
        >
          Cetak
        </Link>
        <br></br>
        <Link
          className='btn btn-primary'
          style={{
            minWidth: "320px",
            maxWidth: "800px",
            margin: "20px",
            marginTop: "0px"
          }}
          to='#'
        >
          Simpan
        </Link>
      </div>
    );
  }
}

export default connect(
  "listNamaKelas, listMapel",
  actions
)(ReviewSoal);
