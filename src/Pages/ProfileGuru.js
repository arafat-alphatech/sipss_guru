import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import MenuBawah from '../Components/MenuBawah';
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from 'axios'

class Profile extends Component {
  state = {
    biodata: [],
    listData: []
  };

  getProfile = () => {
    const token = this.props.token;
    const headers = {
      Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/profile";
    axios
      .get(url, { headers })
      .then((response) => {
        this.setState({
          biodata: response.data.biodata,
          listData: response.data.data
        });
        console.log("from profile guru", response.data);
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  }

  componentDidMount() {
    this.getProfile()

  }

  render() {
    const biodata = this.state.biodata;
    const listData = this.state.listData;
    const image = biodata.foto;
    return (
      <div style={{ padding: "0px", margin: "0px" }}>
        <div className="container" style={{ width: "100%", padding: "0px" }}>
          <div
            className="row"
            style={{ padding: "0", margin: "0 auto", height: "100%" }}>
            <div
              className="col-4"
              style={{ margin: "0px", padding: "0px" }}>
              <div
                className="card rounded-0 border-0">
                <div className="card-body">
                  <img className='rounded-circle' src={image} style={{ height: '100px', width: '100px' }}></img>
                </div>
              </div>
            </div>
            <div
              className="col-8"
              style={{ margin: "0px", padding: "0px" }}>
              <div
                className="card rounded-0 border-0">
                <div className="card-body">
                  <p>NIP : {biodata.nip}</p>
                  <p>Nama : {biodata.nama}</p>
                  <p>Alamat: {biodata.alamat} </p>
                  <p>Jenis kelamin: {biodata.jenis_kelamin} </p>
                  <p>Telepon: {biodata.telepon}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ padding: "0", margin: "0 auto", height: "100%" }}>
            <div
              className="col-6 col-md-12"
              style={{ margin: "0px", padding: "0px" }}>
              <div
                className="card rounded-0 border-0"
                style={{ backgroundColor: "#22a7f0" }}>
                <div className="card-body" style={{ color: 'white' }}>
                  Username :{biodata.username}
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-12"
              style={{ margin: "0px", padding: "0px" }}>
              <div
                className="card rounded-0 border-0"
                style={{ backgroundColor: "#d5b8ff" }}>
                <div className="card-body" style={{ color: 'white' }}>Password : {biodata.password}</div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-10 offset-sm-1"
            style={{ padding: "0", margin: "0 auto", height: "100%" }}>
            <div>
              <div className='card-body'>
                <div className='row' style={{ margin: '0 auto' }}>
                  {/* <div className="col-sm-10 offset-sm-1"></div> */}
                  <table
                    style={{
                      overflowX: 'auto',
                      whiteSpace: "nowrap",
                      // display:'block',
                      margin: '0 auto'
                    }}
                    className="table table-hover table-stripped text-center"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Kelas</th>
                        <th>Mata Pelajaran</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listData.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{key+1}</td>
                            <td>{item.kelas}</td>
                            <td>{item.mapel}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '50px' }}></div>
        <div>
          <footer
            className="footer"
            style={{ position: "fixed", height: "55px", top: 'auto', bottom: "0", marginLeft: 'auto', marginRight: 'auto' }}
          >
            <MenuBawah />
          </footer>
        </div>
      </div>
    );
  }
}

export default connect(
  "token",
  actions
)(Profile);
