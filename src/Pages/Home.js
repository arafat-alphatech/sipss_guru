import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import '../Styles/Home.css'
import { connect } from "unistore/react";
import { actions } from "../store";

class Home extends Component {
    componentDidMount = () => {
        this.props.getKelas()
    };

  render() {
    const listNamaKelas = this.props.listNamaKelas
    return (
      <div>
        <h1 style={{textAlign:'center'}}> INI HOME BOSS</h1>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tom_Cruise_by_Gage_Skidmore.jpg/220px-Tom_Cruise_by_Gage_Skidmore.jpg"
            alt="..."
            class="img-thumbnail"
          />
          <p>Nama Guru</p>
        </div>
        <div class="dropdown" style={{marginLeft:'20px', marginBottom:'10px'}}>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pilih Kelas
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
                listNamaKelas.map((item, key) => {
                    return(
                        <a class="dropdown-item" href="#">
                        {item.nama_kelas}
                        </a>
                    )
                })
            }
          </div>
        </div>
        <div class="card mb-3" style={{marginLeft:'10px', marginRight:'10px'}}>
          <div class="card-body">
            <h5 class="card-title">Kelas VII A </h5>
            <div class="dropdown" style={{marginBottom:'12px'}}>
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pilih Mata Pelajaran
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  IPA
                </a>
                <a class="dropdown-item" href="#">
                  Matematika
                </a>
                <a class="dropdown-item" href="#">
                  Bahasa Inggris
                </a>
              </div>
            </div>
            <Button variant="contained" color="primary" style={{minWidth:'300px', maxWidth:'800px', marginBottom:'10px'}}>Siswa</Button><br/>
            <Button variant="contained" color="primary" style={{minWidth:'300px', maxWidth:'800px', marginBottom:'10px'}}>Ujian</Button><br/>
            <Button variant="contained" color="primary" style={{minWidth:'300px', maxWidth:'800px', marginBottom:'10px'}}>Jadwal</Button><br/>
            <Button variant="contained" color="primary" style={{minWidth:'300px', maxWidth:'800px', marginBottom:'10px'}}>Rapor</Button><br/>
            <Button variant="contained" color="primary" style={{minWidth:'300px', maxWidth:'800px', marginBottom:'10px'}}>Tambah Mata Pelajaran</Button>
          </div>
        </div>
        <div className='tambah-kelas'>
        <Button variant="contained" color="primary" style={{minWidth:'20px', maxWidth:'800px', marginBottom:'50px'}}>Tambah Kelas</Button>
        </div>
      </div>
    );
  }
}

// export default Home;

export default connect(
    "listNamaKelas",
    actions
  )(Home);
