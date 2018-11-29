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
import swal from "sweetalert";

class PopupEditMKCon extends React.Component {
  state = {
    open: false,
    id_guru: "",
    nip: "",
    nama: "",
    id_kelas: "",
    nama_kelas: "",
    id_mapel: "",
    nama_mapel: ""
  };

  // edit guru
  doEditGuru = () => {
    const token = this.props.adminToken;
    const headers = {
      Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/guru/" + this.props.id;
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
      .put(url, data, { headers })
      .then(response => {
        swal("Edit data berhasil");
        this.props.getAllGuru(this.props.token);
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
    const token = this.props.adminToken;
    const headers = {
      Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/guru-detail/" + this.props.id;
    axios
      .get(url, { headers })
      .then(response => {
        this.setState({ nip: response.data.data[0].nip });
        this.setState({ nama: response.data.data[0].nama });
        this.setState({ alamat: response.data.data[0].alamat });
        this.setState({ jenis_kelamin: response.data.data[0].jenis_kelamin });
        this.setState({ telepon: response.data.data[0].telepon });
        this.setState({ username: response.data.data[0].username });
        this.setState({ password: response.data.data[0].password });
        console.log("from pop up edit guru by id", response.data.data[0]);
      })
      .catch(function(error) {
        //handle error
        console.log(error);
      });
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      nip: "",
      nama: "",
      alamat: "",
      jenis_kelamin: "",
      telepon: "",
      username: "",
      password: ""
    });
  };
  // Buka tutup popup (end)

  render() {
    const listKelas = this.props.listKelas;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          <i
            title="edit data"
            style={{ color: "#00e640" }}
            className="fas fa-user-edit"
            style={{ color: "blue" }}
          />
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
            {"Edit Data"}
          </DialogTitle>
          <DialogContent>
            <form onSubmit={e => e.preventDefault()}>
              {/* Form isi NIP */}
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
              {/* Form isi NIS (end) */}

              {/* Piih Guru */}
              <select
                style={{ maxWidth: "93%", margin: "20px 20px 10px 20px" }}
                className="form-control"
                value='aa'
                name="id_kelas"
                onChange={e => this.inputChange(e)}
                onClick={() => this.props.getAllKelas()}
              >
                <option>Nama Guru</option>
                {listKelas.map((item, key) => {
                  return (
                    <option value={item.id_kelas} key={key}>
                      {item.nama_kelas}
                    </option>
                  );
                })}
              </select>
              {/* Pilih Guru (end) */}
              
              {/* Piih Kelas */}
              <select
                style={{ maxWidth: "93%", margin: "20px 20px 10px 20px" }}
                className="form-control"
                value='aa'
                name="id_kelas"
                onChange={e => this.inputChange(e)}
                onClick={() => this.props.getAllKelas()}
              >
                <option>Nama kelas</option>
                {listKelas.map((item, key) => {
                  return (
                    <option value={item.id_kelas} key={key}>
                      {item.nama_kelas}
                    </option>
                  );
                })}
              </select>
              {/* Pilih Kelas (end) */}

              {/* Piih Mata Pelajaran */}
              <select
                style={{ maxWidth: "93%", margin: "20px 20px 10px 20px" }}
                className="form-control"
                value='aa'
                name="id_kelas"
                onChange={e => this.inputChange(e)}
                onClick={() => this.props.getAllKelas()}
              >
                <option>Nama Mata Pelajaran</option>
                {listKelas.map((item, key) => {
                  return (
                    <option value={item.id_kelas} key={key}>
                      {item.nama_kelas}
                    </option>
                  );
                })}
              </select>
              {/* Pilih Mata Pelajaran (end) */}
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Batal
            </Button>
            <Button onClick={() => this.doEditGuru()} color="primary" autoFocus>
              Simpan
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  "is_login, adminToken, listKelas",
  actions
)(PopupEditMKCon);
