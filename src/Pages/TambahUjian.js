import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import axios from 'axios'


class Ujian extends Component {

  componentWillMount(){
    const {id_kelas, id_mapel} = this.props
    this.props.getUjian(id_kelas, id_mapel)
  }
  
  render() {
    const {id_kelas, id_mapel, listMapel, listNamaKelas, listUjian} = this.props
    // console.log(listUjian)
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Ini Setelah Pilih Ujian</h3>
        
        <div
          className="card mb-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        > 
        &nbsp;
          {
            listNamaKelas.map((item, key) => {
              if(item.id_kelas == id_kelas){
                return item.nama_kelas
              }
            })
          }
        &nbsp;
          -
        &nbsp;
          {
            listMapel.map((item, key) => {
              if(item.id_mapel == id_mapel){
                return item['mapel.nama_mapel']
              }
            })
          } 
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
        <Link className="btn btn-primary" to='/post-soal/1' onClick={() => this.props.postNewUjian()}>
            Mulai Buat Soal
        </Link>
        {
          listUjian.map((item, key) => {
            return (

              <div key={key}>
                <Link 
                  to='/post-soal/1' onClick={() => this.props.getCurrentSoal(item.id_paket_soal)}>
                  {item['paket_soal.kode_soal']}
                  -
                  {item.id_paket_soal}
                </Link>
                {/* <button 
                  // className='btn btn-primary btn-sm'
                  // // onClick={() => this.buildLjk(item.id_kelas, item.id_paket_soal)}
                  // disabled={false}                
                  // >
                  // </button> */}
                  <a href={'http://13.251.97.170:5000/build?id_paket_soal='+item.id_paket_soal+'&id_kelas='+item.id_kelas} className='btn btn-primary'>
                    Cetak LJK
                  </a>
              </div>
            )
          })
        }
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
  "id_kelas, id_mapel, listMapel, listNamaKelas, listUjian",
  actions
)(Ujian);
