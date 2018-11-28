import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import PopupMapel from "../Components/PopupMapel"
import PopupEditMapel from "../Components/PopupEditMapel";
import Button from "@material-ui/core/Button";
import swal from 'sweetalert'

class AturMataPelajaran extends Component {
  componentDidMount = () => {
    this.props.getAllMapel(this.props.token)
  }
  doDeleteMapel = (id) => {
    this.props.deleteMapel(id).then(()=>{
      this.props.getAllMapel(this.props.token)
    })
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
                        <th style={{color:'blue'}}>Edit</th>
                        <th style={{color:'red'}}>Hapus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listMapel.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td className='align-middle'>{key + 1}</td>
                            <td className='align-middle'>{item.nama_mapel}</td>
                            <td className='align-middle'>{item.jadwal}</td>
                            <td className='align-middle' title="edit data mata pelajaran">
                            <PopupEditMapel/>
                            </td>
                            <td title="hapus mata pelajaran">
                            <Button>
                              <i
                                onClick={() => this.doDeleteMapel(item.id_mapel)}
                                className="fas fa-user-minus"
                                style={{ color: "red" }}
                              />
                            </Button>
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