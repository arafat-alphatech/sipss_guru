import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import PopupEditRekap from "../Components/PopupEditRekap";
import { Line } from "rc-progress";
import MenuBawah from "../Components/MenuBawah";
import TabelNilai from "../Components/TabelNilai";
import { CSVLink } from "react-csv";
import "../Styles/Home.css";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";
import Media from "react-media";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue
  },
  status: {
    danger: "orange"
  }
});

class RekapNilai extends Component {
  componentDidMount() {
    this.props.getKelasByGuru();
    this.props.kosongRapor();
  }
  handlePilihKelas = () => {
    this.props.getMaPel();
  };
  handlePilihMapel = () => {
    this.props.getPaketByMapel();
  };
  doRekap() {
    this.props.getRekap();
    this.setState({ hilang: true });
  }

  doSummary() {
    this.props.SummaryRapor();
    this.setState({ hilang: !this.state.hilang });
  }

  state = {
    hilang: true
  };

  render() {
    const listRekap = this.props.listRekap;
    const listMapel = this.props.listMapel;
    const listNamaKelas = this.props.listNamaKelas;
    return (
      <div className="dashboard" style={{ marginTop: "30px" }}>
        <div
          className="text-center"
          style={{ marginTop: "100px", marginBottom: "20px" }}
        >
          <div className="card shadow" style={{ margin: "0 20px" }}>
            {/* <h1
              className="text-center"
              style={{ color: "#00A2E5", marginTop: "25px" }}
            >
              Rekapitulasi Nilai
            </h1> */}
            <div className="row">
              <Media query="(max-width: 770px)">
                {matches =>
                  !matches ? (
                    // <p>The document is less than 600px wide.</p>
                    <div className="col-md-10 offset-1">
                      <h1
                        className="text-center"
                        style={{ color: "#00A2E5", marginTop: "25px" }}
                      >
                        Rekapitulasi Nilai
                      </h1>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-5">
                            <select
                              className="form-control"
                              value={listNamaKelas.id_kelas}
                              name="id_kelas"
                              onChange={e => this.props.setField(e)}
                              onClick={() => this.handlePilihKelas()}
                              style={{ marginBottom: "20px" }}
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
                          <div className="col-5">
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
                          <div className="col-2 text-left">
                            <Link
                              // style={{width:'100%'}}
                              className="btn btn-primary"
                              onClick={() => this.doRekap()}
                              to="#"
                            >
                              Atur Bobot Nilai
                            </Link>
                          </div>
                        </div>
                        <div className="row">
                          <table
                            style={{
                              overflowX: "auto",
                              whiteSpace: "nowrap",
                              // display: "block",
                              margin: "0 auto"
                            }}
                            className="table table-hover table-stripped text-center"
                          >
                            <thead>
                              <tr style={{ color: "#00A2E5" }}>
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
                                    <td className="align-middle">
                                      {item.kode_soal}
                                    </td>
                                    <td className="align-middle">
                                      <Line
                                        percent={
                                          (item.total_koreksi /
                                            item.total_siswa) *
                                          100
                                        }
                                        trailWidth="3"
                                        strokeWidth="4"
                                        strokeColor="#00A2E5"
                                      />
                                      &nbsp;
                                      {item.total_koreksi}/{item.total_siswa}
                                    </td>
                                    <td className="align-middle">
                                      <PopupEditRekap
                                        id_paket_soal={item.id_paket_soal}
                                        id_kelas={item.id_kelas}
                                      />
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
                                  <strong>
                                    Total: {this.props.totalPersen}%
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <FormControlLabel
                        control={
                          <MuiThemeProvider theme={theme}>
                            <Switch
                              checked={!this.state.hilang}
                              onChange={() => this.doSummary()}
                              color="secondary"
                              value="checkedA"
                            />
                          </MuiThemeProvider>
                        }
                        label={
                          this.state.hilang
                            ? " Tampilkan Rekap Nilai"
                            : " Sembunyikan Rekap Nilai"
                        }
                      />

                      <TabelNilai
                        tableData={this.props.listRapor}
                        display={this.state.hilang}
                      />
                      <div style={{ margin: "20px auto" }} />
                      <CSVLink
                        style={{
                          margin: "20px auto",
                          display: this.state.hilang ? "none" : "inline-block"
                        }}
                        className="btn btn-primary"
                        data={this.props.listRapor}
                      >
                        Download CSV
                      </CSVLink>
                    </div>
                  ) : (
                    <div className="col-md-12">
                      <h1
                        className="text-center"
                        style={{ color: "#00A2E5", marginTop: "25px" }}
                      >
                        Rekap Nilai
                      </h1>
                      <div className="card-body">
                        <div>
                          <select
                            className="form-control"
                            value={listNamaKelas.id_kelas}
                            name="id_kelas"
                            onChange={e => this.props.setField(e)}
                            onClick={() => this.handlePilihKelas()}
                            style={{ marginBottom: "20px" }}
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
                        <div>
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
                        <div>
                          <Link
                            style={{ margin: "20px auto" }}
                            className="btn btn-primary"
                            onClick={() => this.doRekap()}
                            to="#"
                          >
                            Atur Bobot Nilai
                          </Link>
                        </div>
                        <div>
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
                              <tr style={{ color: "#00A2E5" }}>
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
                                    <td className="align-middle">
                                      {item.kode_soal}
                                    </td>
                                    <td className="align-middle">
                                      <Line
                                        percent={
                                          (item.total_koreksi /
                                            item.total_siswa) *
                                          100
                                        }
                                        trailWidth="3"
                                        strokeWidth="4"
                                        strokeColor="#00A2E5"
                                      />
                                      &nbsp;
                                      {item.total_koreksi}/{item.total_siswa}
                                    </td>
                                    <td className="align-middle">
                                      <PopupEditRekap
                                        id_paket_soal={item.id_paket_soal}
                                        id_kelas={item.id_kelas}
                                      />
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
                                  <strong>
                                    Total: {this.props.totalPersen}%
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <FormControlLabel
                        control={
                          <MuiThemeProvider theme={theme}>
                            <Switch
                              checked={!this.state.hilang}
                              onChange={() => this.doSummary()}
                              color="secondary"
                              value="checkedA"
                            />
                          </MuiThemeProvider>
                        }
                        label={
                          this.state.hilang
                            ? " Tampilkan Rekap Nilai"
                            : " Sembunyikan Rekap Nilai"
                        }
                      />
                      <div style={{ margin: "20px auto" }}>
                        <TabelNilai
                          tableData={this.props.listRapor}
                          display={this.state.hilang}
                          //   display='block'
                        />
                      </div>
                      <div style={{ margin: "20px auto" }} />
                      <CSVLink
                        style={{
                          margin: "20px auto",
                          display: this.state.hilang ? "none" : "inline-block"
                        }}
                        className="btn btn-primary"
                        data={this.props.listRapor}
                      >
                        Download CSV
                      </CSVLink>
                    </div>
                  )
                }
              </Media>
            </div>
          </div>
        </div>

        <div style={{ height: "40px" }} />
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
      </div>
    );
  }
}

export default connect(
  "listRekap, listMapel, listNamaKelas, listPaketSoal, listRapor, totalPersen",
  actions
)(RekapNilai);
