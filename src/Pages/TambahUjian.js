import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";


class Ujian extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Ini Setelah Pilih Ujian</h3>
        
        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <div className="card-body">

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
                    style={{minWidth: "300px" }}
                    name="kode_soal" onChange={e => this.props.setField(e)}
                  />
                  {/* Input Kode Soal (end) */}

                  {/* Input Jadwal Ujian */}
                  <TextField
                    required
                    id="date"
                    label='Jadwal'
                    type='date'
                    defaultValue='a'
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    style={{minWidth: "300px", marginTop:'20px' }}
                  />
                  {/* Input Jadwal Ujian (end) */}
            </form>

          </div>
        </div>
        {/* Section Input Text (end) */}

        {/* select */}
        <div style={{ margin: "10px" }}>
          <select class="form-control">
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
        <Button
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
        </Button>
      {/* Button Mulai Buat Soal (end) */}
      
      </div>
    );
  }
}

export default connect(
  "id_kelas,listMapel,listNamaKelas",
  actions
)(Ujian);
