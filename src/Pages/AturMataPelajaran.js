import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import PopupMapel from "../Components/PopupMapel"

class AturMataPelajaran extends Component {
  componentDidMount = () => {
    this.props.getAllMapel(this.props.token)
  }
  render() {
    const listMapel = this.props.listMapel
    return (
      <div style={{ padding: "20px" }}>
        {/* Table Guru */}
        <div className="card" style={{ margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#39C2C9", marginTop:'20px' }}>Daftar Mata Pelajaran</h1>
        <div  style={{ margin: "20px 20px 0 auto" }}>
        <PopupMapel/>
        </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-10 offset-sm-1">
                <div style={{ margin: "0 auto" }}>
                  <table
                    style={{
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                      margin: "0 auto",
                    }}
                    className="table table-hover table-stripped text-center"
                  >
                    <thead>
                      <tr style={{ color: "#39C2C9" }}>
                        <th>No</th>
                        <th>Mata Pelajaran</th>
                        <th>Wali Kelas</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listMapel.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.nama_mapel}</td>
                            <td>{item.jadwal}</td>
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
    "listMapel, is_login",
    actions
  )(AturMataPelajaran);