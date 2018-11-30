import React, { Component } from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import jsPDF from 'jspdf';
import swal from 'sweetalert'

import MenuBawah from '../Components/MenuBawah'

class ReviewSoal extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id
    this.props.getSoalSiapCetak(id).then(()=>{
      this.props.checkJumlahSoal()
    })
    
  };
  printDocument() {
    const {current_jumlah_soal, jumlah_soal} = this.props
    if (current_jumlah_soal < jumlah_soal) {
      let gakIso = "Soal tidak bisa dicetak karena belum selesai! \n Soal sekarang : "+current_jumlah_soal+ "\n Target soal: " + jumlah_soal
      swal({title:'Maaf',text: gakIso, icon:'warning', dangerMode:true})
    }
    else {
      swal("Sukses","mulai download soal",'success')
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
          className='btn btn-primary'
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
          className='btn btn-danger'
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

        <div style={{marginTop:'40px'}}></div>
        <footer
          className="footer"
          style={{
            height: "55px",
            bottom: "0",
            width: "100%",
            position:'fixed'
          }}
        >
          <MenuBawah />
        </footer>

      </div>
    );
  }
}
  export default connect(
  "siap_cetak,current_jumlah_soal,jumlah_soal",
  actions
)(ReviewSoal);
