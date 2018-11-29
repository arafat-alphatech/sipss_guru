import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import MenuBawah from '../Components/MenuBawah'

class Profile extends Component {
  render() {
    const image =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tom_Cruise_by_Gage_Skidmore.jpg/220px-Tom_Cruise_by_Gage_Skidmore.jpg";
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
                    <img className='rounded-circle' src={image} style={{height:'100px', width:'100px'}}></img>
                </div>
              </div>
            </div>
            <div
              className="col-8"
              style={{ margin: "0px", padding: "0px" }}>
              <div
                className="card rounded-0 border-0">
                <div className="card-body">
                    <p>NIP</p>
                    <p>Alamat</p>
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
                <div className="card-body" style={{color:'white'}}>Ini calon card info kiri </div>
              </div>
            </div>
            <div
              className="col-6 col-md-12"
              style={{ margin: "0px", padding: "0px" }}>
              <div
                className="card rounded-0 border-0"
                style={{ backgroundColor: "#d5b8ff" }}>
                <div className="card-body" style={{color:'white'}}>Ini calon card info kanan</div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-10 offset-sm-1"
            style={{ padding: "0", margin: "0 auto", height: "100%" }}>
            <div>
                <div className='card-body'>
                <div className='row' style={{margin:'0 auto'}}>
                    {/* <div className="col-sm-10 offset-sm-1"></div> */}
                    <table 
                    style={{
                        overflowX:'auto',
                        whiteSpace: "nowrap",
                        // display:'block',
                        margin:'0 auto'
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
                            <tr>
                                <td>1</td>
                                <td>VII A</td>
                                <td>Agama</td>                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div style={{height:'50px'}}></div>
        <div>
        <footer
            className="footer"
            style={{ position: "fixed", height: "55px", top:'auto', bottom: "0", marginLeft:'auto', marginRight:'auto'}}
            >
            <MenuBawah />
          </footer>
        </div>
      </div>
    );
  }
}

export default Profile;
