import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import PopupEditRekap from "../Components/PopupEditRekap"
import { Line} from 'rc-progress';

class RekapNilai extends Component {

    changeStatus(){
        this.props.getChartData().then(()=>{
            this.props.getTableDataFromAPI()
            this.props.getRawDataFromAPI()
        })
        
    }
    componentDidMount(){
        this.props.getKelasByGuru()
    }

    
    render() {
        const progress = 10;
        const listMapel = this.props.listMapel;
        const listNamaKelas = this.props.listNamaKelas;
        const listPaketSoal = this.props.listPaketSoal;
        return (
            <div className="dashboard" style={{ marginTop: "50px", textAlign: "center" }}>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <h1>Dashboard Nilai</h1>
                        <div className="row" style={{ marginTop: "50px", marginBottom:"30px" }}>
                            <div className="col-md-6">
                                <select className="form-control" value={listNamaKelas.id_kelas} name="id_kelas" onChange={e => this.props.setField(e)} onClick={() => this.props.getMaPel()}>
                                    <option>Pilih Kelas</option>
                                    {listNamaKelas.map((item, key) => {
                                        return <option value={item.id_kelas} key={key}>{item.nama_kelas}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select className="form-control" value={listMapel.id_mapel} name="id_mapel" onChange={e => this.props.setField(e)} onClick={() => this.props.getPaketByMapel()} >
                                    <option>Pilih Mata Pelajaran</option>
                                    {listMapel.map((item, key) => {
                                        return (
                                            <option key={key} value={item.id_mapel}>{item['mapel.nama_mapel']}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
            <div className="row">
              <div className="col-sm-10 offset-sm-1">
                <div style={{ margin: "0 auto" }}>
                  <table
                    style={{
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      margin: "0 auto"
                    }}
                    className="table table-hover table-stripped text-center"
                  >
                    <thead>
                      <tr style={{ color: "#39C2C9" }}>
                        <th>No</th>
                        <th>Kode Soal</th>
                        <th>Status Koreksi</th>
                        <th>Persentase</th>
                        {/* <th style={{color:'blue'}}>Edit Persentase</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {listPaketSoal.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td className='align-middle'>{item.kode_soal}</td>
                            <td className='align-middle'><Line percent={progress/20*100} trailWidth='3' strokeWidth="4" strokeColor="#00A2E5" />{progress}/{progress}</td>
                            <td className='align-middle'><span>Persentase</span><PopupEditRekap/></td>
                            {/* <td title="edit data guru">
                                <PopupEditRekap/>
                            </td> */}
                          </tr>
                        );
                      })}
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td><strong>Total: {progress}%</strong></td>
                          <td></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
   
              </div>
            </div>
          </div>
                </div>
                             
            </div>
        )
    }

}

export default connect(
    "listMapel,listNamaKelas,listPaketSoal",
    actions
)(RekapNilai);