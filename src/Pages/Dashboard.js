import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import Chart from "../Components/Graph";
import { CSVLink } from "react-csv";
import TabelNilai from "../Components/TabelNilai";
import MenuBawah from "../Components/MenuBawah";
import Button from "@material-ui/core/Button";
import "../Styles/Home.css";

class Dashboard extends Component {
  changeStatus() {
    this.props.getChartData().then(() => {
      this.props.getTableDataFromAPI();
      this.props.getRawDataFromAPI();
    });
  }
  componentDidMount() {
    this.props.getKelasByGuru();
    this.props.kosongTableDashboard();
  }

  render() {
    const listMapel = this.props.listMapel;
    const listNamaKelas = this.props.listNamaKelas;
    const listPaketSoal = this.props.listPaketSoal;
    return (
      <div>
        <div
          className="dashboard"
          style={{ marginTop: "30px", textAlign: "center" }}
        >
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <h1 style={{ color: "#00A2E5" }}>Statistik Nilai</h1>
              <div
                className="row"
                style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  marginLeft: "10px",
                  marginRight: "0px"
                }}
              >
                <div className="col-md-4" style={{ marginBottom: "10px" }}>
                  <select
                    className="form-control"
                    value={listNamaKelas.id_kelas}
                    name="id_kelas"
                    onChange={e => this.props.setField(e)}
                    onClick={() => this.props.getMaPel()}
                  >
                    <option>Kelas</option>
                    {listNamaKelas.map((item, key) => {
                      return (
                        <option value={item.id_kelas} key={key}>
                          {item.nama_kelas}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-4" style={{ marginBottom: "10px" }}>
                  <select
                    className="form-control"
                    value={listMapel.id_mapel}
                    name="id_mapel"
                    onChange={e => this.props.setField(e)}
                    onClick={() => this.props.getPaketByMapel()}
                  >
                    <option>Mata Pelajaran</option>
                    {listMapel.map((item, key) => {
                      return (
                        <option key={key} value={item.id_mapel}>
                          {item["mapel.nama_mapel"]}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-control"
                    value={listPaketSoal.id_mapel}
                    name="id_paket_soal"
                    onChange={e => this.props.setField(e)}
                  >
                    <option>Kode Paket Soal</option>
                    {listPaketSoal.map((item, key) => {
                      return (
                        <option key={key} value={item.id_paket_soal}>
                          {item.kode_soal}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <Link
                className="btn btn-primary rounded"
                onClick={() => this.changeStatus()}
                to="#"
              >
                Lihat Statistik
              </Link>
            </div>
            <div className="col-md-3" style={{ marginBottom: "20px" }} />
          </div>

          <div className="row" style={{ marginTop: "0px", marginLeft: "10px" }}>
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <Chart labels={this.props.labels} data={this.props.data} />
              <div className='text-center'>
              <TabelNilai tableData={this.props.tableData} />
              <h1>aaaaaaaaa</h1>
              </div>
              <CSVLink
                style={{ marginTop: "30px" }}
                className="btn btn-primary"
                data={this.props.csvData}
              >
                Unduh data .csv
              </CSVLink>
            </div>
            <div className="col-sm-2" />
          </div>
          {/* footer */}
          <div style={{ marginBottom: "80px" }} />
          <div>
            <footer
              className="footer"
              style={{
                position: "fixed",
                width: "100%",
                height: "55px",
                top: "auto",
                bottom: "0",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <MenuBawah />
            </footer>
          </div>
          {/* footer (end) */}
        </div>
      </div>
    );
  }
}

export default connect(
  "listMapel,listNamaKelas,listPaketSoal,labels,data,csvData,tableData",
  actions
)(Dashboard);
