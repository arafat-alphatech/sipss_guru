import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Ujian extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Ini Setelah Pilih Ujian</h3>

        {/* Info Ujian Yang Akan Dibuat */}
        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px", padding:'10px' }}
        >
          <div className="card-body">
            <h5 className="card-title">Kelas VII A</h5>
            <h5 className="card-title">IPA</h5>
            <p className="card-text">
            <i class="far fa-address-book" style={{marginRight:'10px', color:'#1f3a93'}}></i>
              40 siswa
            </p>
            <p className="card-text">
            <i class="far fa-calendar-alt" style={{marginRight:'10px', color:'#1f3a93'}}></i>
              6 Desember 2018
            </p>
            <p className="card-text" ><i class="fas fa-list-ol" style={{marginRight:'10px', color:'#1f3a93'}}></i>25 Soal</p>
          </div>
          {/* Info Ujian Yang Akan Dibuat (end) */}

        {/* Button Edit Soal */}
        <Button
              variant="contained"
              color="primary"
              style={{
                minWidth: "100px",
                maxWidth: "100px",
                marginBottom: "10px",
                marginLeft:'auto',
                marginTop:'10px'
              }}
            >
              Edit
            </Button>
        {/* Button Edit Soal (end) */}

        </div>
        {/* Info Ujian Yang Akan Dibuat (end) */}

        {/* Button Mulai Buat Soal */}
             <Button
              variant="contained"
              color="primary"
              style={{
                minWidth: "340px",
                maxWidth: "800px",
                marginBottom: "10px",
                marginLeft:'10px',
                marginTop:'10px'
              }}
            >
              Mulai Buat Soal
            </Button>
        {/* Button Mulai Buat Soal (end) */}
        

      </div>
    );
  }
}

export default Ujian;