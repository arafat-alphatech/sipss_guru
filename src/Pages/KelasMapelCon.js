import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import PopupGuru from '../Components/PopupGuru'
import PopupEditGuru from "../Components/PopupEditGuru";
import Button from "@material-ui/core/Button";
import swal from 'sweetalert'

class KelasMapel extends Component {
    componentDidMount = () => {
        this.props.getAllGuru(this.props.token)
    }
    doDeleteGuru = (id) => {
      this.props.deleteGuru(id).then(()=>{
        this.props.getAllGuru(this.props.token)
      })
    }
    render() {
    const dataGuru = this.props.listGuru
    return (
      <div style={{ padding: "20px" }}>
        {/* Table Guru */}
        <div className="card" style={{ margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#39C2C9", marginTop:'20px' }}>Daftar Guru</h1>
        <div  style={{ margin: "20px 20px 0 auto" }}>
        <PopupGuru/>
        </div>
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
                        <th>NIP</th>
                        <th>Nama Guru</th>
                        <th>Alamat</th>
                        <th>Jenis Kelamin</th>
                        <th>Telepon</th>
                        <th>Username</th>
                        <th style={{color:'blue'}}>Edit</th>
                        <th style={{color:'red'}}>Hapus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataGuru.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td className='align-middle'>{key + 1}</td>
                            <td className='align-middle'>{item.nip}</td>
                            <td className='align-middle'>{item.nama}</td>
                            <td className='align-middle'>{item.alamat}</td>
                            <td className='align-middle'>{item.jenis_kelamin}</td>
                            <td className='align-middle'>{item.telepon}</td>
                            <td className='align-middle'>{item.username}</td>
                            <td title="edit data guru">
                                <PopupEditGuru id={item.id_guru}/>
                            </td>
                            <td title="hapus data guru">
                              <Button>
                              <i
                                onClick={() =>  this.doDeleteGuru(item.id_guru)}
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
    "listGuru, is_login",
    actions
  )(KelasMapel);
