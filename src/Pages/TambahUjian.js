import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import '../Styles/Home.css'

class Ujian extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Ini Setelah Pilih Ujian</h3>
        
        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <div className="card-body" style={{marginLeft:'auto', marginRight:'auto'}}>

            {/* Form Input Text */}
            <form>

                  {/* Input Kode Soal */}
                  <TextField
                    required
                    id="outlined-required"
                    label='Kode Soal'
                    defaultValue=''
                    margin="normal"
                    variant="outlined"
                    style={{minWidth: "300px", maxWidth: '800px'}}
                    name="kode_soal" onChange={e => this.props.setField(e)}
                  />
                  <br></br>
                  {/* Input Kode Soal (end) */}

                  {/* Input Jadwal Ujian */}
                  <TextField
                    required
                    id="date"
                    label='Jadwal'
                    type='datetime-local'
                    defaultValue='a'
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    style={{minWidth: "300px", marginTop:'20px' }}
                    name="tanggal_ujian" onChange={e => this.props.setField(e)}
                  />
                  {/* Input Jadwal Ujian (end) */}
            </form>

          </div>
        </div>
        {/* Section Input Text (end) */}

        {/* select */}
        <div style={{ margin: "10px" }} >
          <select className="form-control" name="jumlah_soal" onChange={e => this.props.setField(e)}> 
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

        {/* Button Mulai Buat Soal */}
        <Link className="btn btn-primary" to='/post-soal/1' onClick={() => this.props.postNewUjian()}
            style={{minWidth: "340px",
            maxWidth: "800px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginTop: "40px"}}>
            Mulai Buat Soal
        </Link>
        {/* <Button
          variant="contained"
          color="primary"
          style={{
            minWidth: "340px",
            maxWidth: "800px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginTop: "40px"
          }}
        >
          Mulai Buat Soal
        </Button> */}
      {/* Button Mulai Buat Soal (end) */}
      
      </div>
    );
  }
}

export default connect(
  "id_kelas,listMapel,listNamaKelas",
  actions
)(Ujian);
