import React, { Component } from "react";
import Media from "react-media";
import '../Styles/Home.css'

class TableNilai extends Component {
  render() {
    return (
      <div className="tabelnilai" style={{ marginTop: "30px", display: this.props.display ? "none": "block" }}>
        <Media query="(max-width: 499px)">
          {matches =>
            matches ? (
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
                    <th>Nomor Induk Siswa</th>
                    <th>Nama Siswa</th>
                    <th>Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tableData.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td className="align-middle">{key + 1}</td>
                        <td className="align-middle">{item.nis}</td>
                        <td className="align-middle">{item.nama}</td>
                        <td className="align-middle">{item.nilai}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
                <table
                style={{
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                  margin: "0 auto"
                }}
                className="table table-hover table-stripped text-center"
              >
                <thead>
                  <tr style={{ color: "#00A2E5" }}>
                    <th>No</th>
                    <th>Nomor Induk Siswa</th>
                    <th>Nama Siswa</th>
                    <th>Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tableData.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td className="align-middle">{key + 1}</td>
                        <td className="align-middle">{item.nis}</td>
                        <td className="align-middle">{item.nama}</td>
                        <td className="align-middle">{item.nilai}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )
          }
        </Media>
       
      </div>
    );
  }
}

export default TableNilai;
