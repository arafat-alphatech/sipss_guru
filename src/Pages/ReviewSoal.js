import React, { Component } from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { ContentState, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import jsPDF from 'jspdf';

import MenuBawah from '../Components/MenuBawah'

class ReviewSoal extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id
    this.props.getSoalSiapCetak(id)
  };
  printDocument() {
    if (this.props.current_jumlah_soal < this.props.jumlah_soal) {
      alert("Soal tidak bisa dicetak karena belum selesai!")
    }
    else {
      alert("mulai download soal")
      const input = document.getElementById('divToPrint');
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.fromHTML(input, 10, 10, {'width': 180 } );
      pdf.save("download.pdf");
    }
  }

  render() {
    const daftar_soal = this.props.siap_cetak;
    return (
      <div>
        {/* ===============soal perulangan sebanyak soal yang sudah ada========= */}
        <div id="divToPrint">
          {daftar_soal.map((item, key) => {
            return (
              <div key={key} className="card mb-3" style={{ margin: "20px" }} >
                <div className="card-body">
                  <div className="isi-soal">
                      {/* [{item.no_soal}] */}
                      <p dangerouslySetInnerHTML= {{__html: [item.narasi.slice(0, 3), item.no_soal + '. ', item.narasi.slice(3)].join('')}} >
                      </p>
                  </div>
                  <div className="pilihan-jawaban">
                    <p style={{ marginBottom: "0px" }}>(a) {item.option_A}</p>
                    <p style={{ marginBottom: "0px" }}>(b) {item.option_B}</p>
                    <p style={{ marginBottom: "0px" }}>(c) {item.option_C}</p>
                    <p style={{ marginBottom: "0px" }}>(d) {item.option_D}</p>
                    <p style={{ marginBottom: "20px" }}>(e) {item.option_E}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ===================menu di bawah=============================== */}
        <Link
          className='btn btn-danger'
          style={{
            minWidth: "320px",
            maxWidth: "800px",
            margin: "20px"
          }}
          to='#'
          onClick={() => this.printDocument()}
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

        {/* Footer */}
        <div style={{marginTop:'80px'}}></div>
        <footer
          className="footer"
          style={{
            position: "fixed",
            height: "55px",
            bottom: "0",
            width: "500px"
          }}
        >
          <MenuBawah />
        </footer>
        {/* Footer (end) */}

      </div>
    );
  }
}
  export default connect(
  "siap_cetak,current_jumlah_soal,jumlah_soal",
  actions
)(ReviewSoal);
