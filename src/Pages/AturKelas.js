import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class AturKelas extends Component {
  componentDidMount = () => {
    this.props.getAllKelas(this.props.token);
  };
  render() {
    const listKelas = this.props.listKelas;
    return (
      <div style={{ padding: "20px" }}>
        {/* Table Guru */}
        <div className="card" style={{ margin: "0 auto" }}>
          <h1
            style={{ textAlign: "center", color: "#39C2C9", marginTop: "20px" }}
          >
            Daftar Kelas
          </h1>
          <button className="btn" style={{ margin: "20px 20px 0 auto" }}>
            Tambah Kelas &nbsp;
            <i
              title="tambah data guru"
              style={{ color: "#00e640" }}
              className="fas fa-user-plus"
            >
              <span style={{ marginRight: "20px" }} />
            </i>
          </button>
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
                        <th>Kelas</th>
                        <th>Wali Kelas</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listKelas.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.nama_kelas}</td>
                            <td>{item.wali_kelas}</td>
                            <td title="edit data guru">
                              <i
                                onClick={() => alert("edit boss?")}
                                className="fas fa-user-edit"
                                style={{ color: "blue" }}
                              />
                            </td>
                            <td title="hapus data guru">
                              <i
                                onClick={() => alert("hapus boss?")}
                                className="fas fa-user-minus"
                                style={{ color: "red" }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* Table Guru (End) */}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "30px" }} />
      </div>
    );
  }
}

export default connect(
  "listKelas, is_login",
  actions
)(AturKelas);
