import React, { Component } from "react";
import MenuBawah from "../Components/MenuBawah";
import {Link} from "react-router-dom"

class Intro extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Ini Home Sebenarnya</h1>
        <div
          className="row container-fluid"
          style={{ width: "100%", margin: "0px" }}
        >
          <div className="col-6">
        <Link to='/ujian'>
            <div
              className="card"
              style={{
                minWidth: "120px",
                maxWidth: "100%",
                margin: "20px",
                marginRight: "0px",
                marginLeft: "0px",
                padding: "10px"
            }}
            >
              <img
                className="card-img-top"
                src="https://i.ibb.co/84Mzb8H/ujian.png"
                alt="Card image cap"
                style={{maxWidth:"140px", maxHeight:'100px'}}
                />
              <div
                className="card-body"
                style={{ padding: "0px", margin: "0px", marginBottom: "10px" }}
                >
                <h5
                  className="card-title"
                  style={{ padding: "0px", margin: "0px", textAlign: "center" }}
                  >
                  Ujian
                </h5>
              </div>
            </div>
                  </Link>
          </div>


          <div className="col-6">
          <Link to='/dashboard'>
            <div
              className="card"
              style={{
                  minWidth: "120px",
                  maxWidth: "100%",
                  margin: "20px",
                  marginLeft: "0px",
                  marginRight: "0px",
                  padding: "10px"
                }}
                >
              <img
                className="card-img-top"
                src="http://icons-for-free.com/free-icons/png/512/2136425.png"
                alt="Card image cap"
                style={{maxWidth:"140px", height:'100px'}}
                />
              <div
                className="card-body"
                style={{ padding: "0px", margin: "0px", marginBottom: "10px" }}
                >
                <h5
                  className="card-title"
                  style={{ padding: "0px", margin: "0px", textAlign: "center" }}
                  >
                  Statistik
                </h5>
              </div>
            </div>
                  </Link>
          </div>
        </div>


        <div
          className="row container-fluid"
          style={{ width: "100%", margin: "0px", marginBottom: "800px" }}
        >
          <div className="col-6">
            <div
              className="card"
              style={{
                minWidth: "120px",
                maxWidth: "100%",
                margin: "20px",
                marginLeft: "0px",
                marginRight: "0px",
                padding: "10px"
              }}
            >
              <img
                className="card-img-top"
                src="https://i.ibb.co/hWPJS61/summary-icon.png"
                alt="Card image cap"
                style={{width:'120px', height:'100px'}}
              />
              <div
                className="card-body"
                style={{ padding: "0px", margin: "0px", marginBottom: "10px" }}
              >
                <h5
                  className="card-title"
                  style={{ padding: "0px", margin: "0px", textAlign: "center" }}
                >
                  Rapor
                </h5>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="card"
              style={{
                minWidth: "120px",
                maxWidth: "100%",
                margin: "20px",
                marginLeft: "0px",
                marginRight: "0px",
                padding: "10px"
              }}
            >
              <img
                className="card-img-top"
                src="https://i.ibb.co/rZNGTsV/storyblocks-teacher-in-the-classroom-with-students-vector-illustration-design-Bd-YUS3o9m-thumb.jpg"
                alt="Card image cap"
                style={{maxWidth:"140px", height:'100px'}}
              />
              <div
                className="card-body"
                style={{ padding: "0px", margin: "0px", marginBottom: "10px" }}
              >
                <h5
                  className="card-title"
                  style={{ padding: "0px", margin: "0px", textAlign: "center" }}
                >
                  Atur Siswa
                </h5>
              </div>
            </div>
          </div>
        </div>
        <footer
          className="footer"
          style={{ position: "fixed", height: "60px", bottom: "0" }}
        >
          <MenuBawah />
        </footer>
      </div>
    );
  }
}

export default Intro;
