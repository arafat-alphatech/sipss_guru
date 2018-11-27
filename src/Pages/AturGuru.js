import React, { Component } from "react";
import MenuBawah from "../Components/MenuBawah";

class AturGuru extends Component {
  render() {
    const namaGuru = [
      {
        nama: "arafat",
        nip: "1232132132",
        alamat: "nganjuk",
        jk: "lakik",
        telepon: "23987123",
        username: "haha",
        password: "hihi"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        username: "kobar",
        password: "aku ganteng"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        username: "kobar",
        password: "aku ganteng"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        username: "kobar",
        password: "aku ganteng"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        username: "kobar",
        password: "aku ganteng"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        username: "kobar",
        password: "aku ganteng"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        username: "kobar",
        password: "aku ganteng"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        username: "kobar",
        password: "aku ganteng"
      }
    ];
    return (
      <div style={{ padding: "20px" }}>
        {/* Table Guru */}
        <div className="card" style={{ margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#39C2C9", marginTop:'20px' }}>Daftar Guru</h1>
          <button className="btn" style={{ margin: "20px 20px 0 auto" }}>
            Tambah Guru &nbsp;
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
                      display: "block",
                      whiteSpace: "nowrap",
                      margin: "0 auto"
                    }}
                    className="table table-hover table-stripped text-center"
                  >
                    <thead>
                      <tr style={{ color: "#39C2C9" }}>
                        <th>No</th>
                        <th>NIP</th>
                        <th>Nama Guru</th>
                        <th>Alamat</th>
                        <th>Jenis Kelamin</th>
                        <th>Telepon</th>
                        <th>Username</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {namaGuru.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.nip}</td>
                            <td>{item.nama}</td>
                            <td>{item.alamat}</td>
                            <td>{item.jk}</td>
                            <td>{item.telepon}</td>
                            <td>{item.username}</td>
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

export default AturGuru;
