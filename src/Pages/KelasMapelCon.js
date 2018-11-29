import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import PopupGuru from '../Components/PopupGuru'
import PopupEditGuru from "../Components/PopupEditGuru";
import Button from "@material-ui/core/Button";
import swal from 'sweetalert'
import PopupMKCon from '../Components/PopupMKCon' 
import PopupEditMKCon from '../Components/PopupEditMKCon' 

class KelasMapel extends Component {
    componentDidMount = () => {
        this.props.getMapelKelas(this.props.token)
    }
    render() {
    const listMapelConj = this.props.listMapelConj
    return (
      <div style={{ padding: "20px" }}>
        {/* Table Guru */}
        <div className="card" style={{ margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#39C2C9", marginTop:'20px' }}>Penempatan Guru</h1>
        <div  style={{ margin: "20px 20px 0 auto" }}>
        <PopupMKCon />
        </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-10 offset-sm-1">
                <div style={{ margin: "0 auto" }}>
                  <table
                    style={{
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                    //   display:'block',
                      margin: "0 auto"
                    }}
                    className="table table-hover table-stripped text-center"
                  >
                    <thead>
                      <tr style={{ color: "#39C2C9" }}>
                        <th>No</th>
                        <th>NIP</th>
                        <th>Nama Guru</th>
                        <th>Nama Kelas</th>
                        <th>Nama Mata Pelajaran</th>
                        <th style={{color:'blue'}}>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listMapelConj.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td className='align-middle'>{key + 1}</td>
                            <td className='align-middle'>{item.nip}</td>
                            <td className='align-middle'>{item.nama}</td>
                            <td className='align-middle'>{item.nama_kelas}</td>
                            <td className='align-middle'>{item.nama_mapel}</td>
                            <td title="edit data guru">
                                <PopupEditMKCon nip = {item.nip} 
                                                nama = {item.nama} 
                                                nama_kelas = {item.nama_kelas} 
                                                nama_mapel = {item.nama_mapel}
                                                id_kelas_old = {item.id_kelas}
                                                id_guru_old = {item.id_guru}
                                                id_mapel_old = {item.id_mapel}/>
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
    "is_login, listMapelConj",
    actions
  )(KelasMapel);
