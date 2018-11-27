import React, { Component } from "react";
import MenuBawah from '../Components/MenuBawah'

class AturSiswa extends Component {
  render() {
    const namaSiswa = [
      {
        nama: "arafat",
        nip: "1232132132",
        alamat: "nganjuk",
        jk: "lakik",
        telepon: "23987123",
        kelas: "VIIA",
        password: "hihi"
      },
      {
        nama: "kobar",
        nip: "00000000000",
        alamat: "jember",
        jk: "lakik nemen",
        telepon: "23987123",
        kelas: "VIIB",
        password: "aku ganteng"
      }
    ];
    return (
      <div style={{ padding: "20px" }}>
        {/* Table Guru */}
        <div className="card" style={{ margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#39C2C9", marginTop:'20px' }}>Daftar Siswa</h1>
        <button className='btn' style={{margin: "20px 20px 0 auto"}}>
        Tambah Siswa &nbsp;
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
                    //   display: "block",
                      whiteSpace: "nowrap",
                      margin: "0 auto"
                    }}
                    className="table table-hover table-stripped text-center"
                  >
                    <thead>
                      <tr style={{ color: "#39C2C9" }}>
                        <th>No</th>
                        <th>NIS</th>
                        <th>Nama Siswa</th>
                        <th>Alamat</th>
                        <th>Jenis Kelamin</th>
                        <th>Telepon</th>
                        <th>Nama Kelas</th>
                        <th style={{ color: "blue" }}>Edit</th>
                        <th style={{ color: "red" }}>Hapus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {namaSiswa.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.nip}</td>
                            <td>{item.nama}</td>
                            <td>{item.alamat}</td>
                            <td>{item.jk}</td>
                            <td>{item.telepon}</td>
                            <td>{item.kelas}</td>
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
      </div>
    );
  }
}

export default AturSiswa;
