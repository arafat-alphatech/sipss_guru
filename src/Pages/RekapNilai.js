import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import PopupEditRekap from "../Components/PopupEditRekap";
import { Line } from "rc-progress";
import MenuBawah from '../Components/MenuBawah';
import TabelNilai from "../Components/TabelNilai";
import { CSVLink } from "react-csv";

class RekapNilai extends Component {
  componentDidMount() {
    this.props.getKelasByGuru();
    this.props.kosongRapor()
  };
  handlePilihKelas = () => {
    this.props.getMaPel();
  };
  handlePilihMapel = () => {
    this.props.getPaketByMapel();
  };
  doRekap(){
    this.props.getRekap()
  };
  doSummary(){
    this.props.SummaryRapor()
  };



  render() {
    const progress = 10;
    const listRekap = this.props.listRekap;
    const listMapel = this.props.listMapel;
    const listNamaKelas = this.props.listNamaKelas;
    return (
      <div
        className="dashboard"
        style={{ marginTop: "30px", textAlign: "center" }}
      >
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ color: "#00A2E5" }}>Rekapitulasi Nilai</h1>
            <div
              className="row"
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                marginLeft: "auto"
              }}
            >
              <div className="col-md-6">
                <select
                  className="form-control"
                  value={listNamaKelas.id_kelas}
                  name="id_kelas"
                  onChange={e => this.props.setField(e)}
                  onClick={() => this.handlePilihKelas()}
                  style={{marginBottom:'20px'}}
                >
                  <option>Pilih Kelas</option>
                  {listNamaKelas.map((item, key) => {
                    return (
                      <option value={item.id_kelas} key={key}>
                        {item.nama_kelas}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-6">
                <select
                  className="form-control"
                  value={listMapel.id_mapel}
                  name="id_mapel"
                  onChange={e => this.props.setField(e)}
                  onClick={() => this.handlePilihMapel()}
                >
                  <option>Pilih Mata Pelajaran</option>
                  {listMapel.map((item, key) => {
                    return (
                      <option key={key} value={item.id_mapel}>
                        {item["mapel.nama_mapel"]}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <Link className="btn btn-primary" onClick={() => this.doRekap()} to='#'>
                Atur Nilai
            </Link>
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
                      display: "block",
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
                      {listRekap.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td className="align-middle">{key + 1}</td>
                            <td className="align-middle">{item.kode_soal}</td>
                            <td className="align-middle">
                              <Line
                                percent={
                                  (item.total_koreksi / item.total_siswa) * 100
                                }
                                trailWidth="3"
                                strokeWidth="4"
                                strokeColor="#00A2E5"
                              />&nbsp;
                              {item.total_koreksi}/{item.total_siswa}
                            </td>
                            <td className="align-middle">
                              <PopupEditRekap id_paket_soal={item.id_paket_soal} id_kelas={item.id_kelas}/>
                              {/* 20% */}
                            </td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td>
                          <strong>Total: {this.props.totalPersen}%</strong>
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link style={{marginTop:"20px",marginBottom:"20px"}} className="btn btn-primary" onClick={() => this.doSummary()} to='#'>
                  Lihat Rekap Nilai
                </Link>
                <TabelNilai tableData={this.props.listRapor}/>
                <CSVLink style={{marginTop:"30px"}} className="btn btn-primary" data={this.props.listRapor}>Download CSV</CSVLink>
            </div>
          </div>
          
        </div>
        <div style={{height:'40px'}}></div>
        <div>
        <footer
            className="footer"
            style={{ position: "fixed", width:"100%", height: "55px", top:'auto', bottom: "0", marginLeft:'auto', marginRight:'auto'}}
            >
            <MenuBawah />
          </footer>
        </div>
      </div>
    );
  }
}

export default connect(
  "listRekap, listMapel, listNamaKelas, listPaketSoal, listRapor, totalPersen",
  actions
)(RekapNilai);
