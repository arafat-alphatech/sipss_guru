import React, { Component } from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import { ContentState, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";


class ReviewSoal extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id
    this.props.getSoalSiapCetak(id)
  };
  checkAlert=()=>{
    if(this.props.current_jumlah_soal < this.props.jumlah_soal){
      alert("Soal tidak bisa dicetak karena belum selesai!")
    }
    else{
      alert("Soal berhasil dicetak!")
    }
  };
  render() {
    const daftar_soal = this.props.siap_cetak;
    return (
      <div>
        {/* ===============soal perulangan sebanyak soal yang sudah ada========= */}
        {daftar_soal.map((item, key) => {
          return (
            <div key={key} className="card mb-3" style={{ margin: "20px" }}>
              <div className="card-body">
                <div className="isi-soal">
                  [{item.no_soal}]
                  {
                  //  ContentState.createFromBlockArray(convertFromRaw(item.narasi))
                   draftToHtml(convertFromRaw(item.narasi))
                  }
                  {item.narasi}
                </div>
                <div className="pilihan-jawaban">
                  <p style={{ marginBottom: "0px" }}>(a) {item.option_A}</p>
                  <p style={{ marginBottom: "0px" }}>(b) {item.option_B}</p>
                  <p style={{ marginBottom: "0px" }}>(c) {item.option_C}</p>
                  <p style={{ marginBottom: "0px" }}>(d) {item.option_D}</p>
                  <p style={{ marginBottom: "0px" }}>(e) {item.option_E}</p>
                </div>
              </div>
            </div>
          )
        })}

        {/* ===================menu di bawah=============================== */}
        <Link
          className='btn btn-danger'
          style={{
            minWidth: "320px",
            maxWidth: "800px",
            margin: "20px"
          }}
          to='#'
          onClick={() => this.checkAlert()}
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
          to='/tambah-ujian'
        >
          Back
        </Link>
      </div>
    );
  }
}

export default connect(
  "siap_cetak,current_jumlah_soal,jumlah_soal",
  actions
)(ReviewSoal);
