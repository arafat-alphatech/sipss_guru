import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "unistore/react";
import { actions } from "../store";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import swal from 'sweetalert';

class PopupEditSiswa extends React.Component {
  state = {
    open: false,
    nip: "",
    nama: "",
    alamat: "",
    jenis_kelamin: "",
    telepon: "",
    username: "",
    password: ""
  };

  // post guru
  postNewGuru = () => {
    const token = this.props.adminToken;
    const headers = {
      Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/guru";
    const data = {
      nip: this.state.nip,
      nama: this.state.nama,
      alamat: this.state.alamat,
      jenis_kelamin: this.state.jenis_kelamin,
      telepon: this.state.telepon,
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(url, data, { headers })
      .then(response => {
        swal("Tambah guru berhasil");
        console.log("Response dari API: ", response);
        this.setState({ open: false });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // post guru (end)

  // edit guru
  editGuru = () => {
    const token = this.props.adminToken;
    const headers = {
      Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/guru";
    const data = {
      nip: this.state.nip,
      nama: this.state.nama,
      alamat: this.state.alamat,
      jenis_kelamin: this.state.jenis_kelamin,
      telepon: this.state.telepon,
      username: this.state.username,
      password: this.state.password
    };
    axios
      .patch(url, data, { headers })
      .then(response => {
        swal("Tambah guru berhasil");
        console.log("Response dari API: ", response);
        this.setState({ open: false });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // edit guru (end)

  //set state ketika ada inputan
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  //set state ketika ada inputan (end)

  // Buka tutup popup
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  // Buka tutup popup (end)

  render() {
    console.log(this.state);
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          <i
            title="edit data siswa"
            style={{ color: "#00e640" }}
            className="fas fa-user-edit"
            style={{color:'blue'}}
          >
          </i>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {"Edit Data Siswa"}
          </DialogTitle>
          <DialogContent>
            <form onSubmit={e => e.preventDefault()}>
              <div
                className="form-label-group"
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  maxWidth: "500px"
                }}
              >
                <TextField
                  required
                  name="username"
                  type="text"
                  label="Username"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                />
              </div>

              <div
                className="form-label-group"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto"
                }}
              >
                <TextField
                  required
                  name="nama"
                  type="text"
                  label="Nama Guru"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                />
              </div>

              <div
                className="form-label-group"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto"
                }}
              >
                <TextField
                  required
                  name="nip"
                  type="text"
                  label="NIP"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                />
              </div>

              {/* Piih Jenis Kelamin */}

              <select
                style={{ maxWidth: "93%", margin: "20px 20px 10px 20px" }}
                className="form-control"
                value={this.state.jenis_kelamin}
                name="jenis_kelamin"
                onChange={e => this.inputChange(e)}
              >
                <option>Jenis Kelamin</option>
                {[["Laki - laki", "L"], ["Perempuan", "P"]].map((item, key) => {
                  return (
                    <option value={item[1]} key={key}>
                      {item[0]}
                    </option>
                  );
                })}
              </select>

              {/* Pilih Jenis Kelamin (end) */}

              <div
                className="form-label-group"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto"
                }}
              >
                <TextField
                  required
                  name="alamat"
                  type="text"
                  label="Alamat"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                />
              </div>

              <div
                className="form-label-group"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto"
                }}
              >
                <TextField
                  required
                  name="telepon"
                  type="text"
                  label="Telepon"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                />
              </div>
              <div
                className="form-label-group"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto"
                }}
              >
                <TextField
                  required
                  name="password"
                  type="password"
                  label="Password"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  style={{
                    width: "100%"
                  }}
                  onChange={e => this.inputChange(e)}
                />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Batal
            </Button>
            <Button
              onClick={() => this.postNewGuru()}
              color="primary"
              autoFocus
            >
              Tambahkan
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  "is_login, adminToken",
  actions
)(PopupEditSiswa);