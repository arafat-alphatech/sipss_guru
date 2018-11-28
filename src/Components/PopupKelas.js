import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "unistore/react";
import { actions } from "../store";
import TextField from "@material-ui/core/TextField";

class PopupKelas extends React.Component {
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

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // Buka tutup popup

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Buka tutup popup (end)

  render() {
    const listNamaKelas = this.props.listNamaKelas;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          Tambah Kelas &nbsp;
          <i
            title="tambah data guru"
            style={{ color: "#00e640" }}
            className="fas fa-user-plus"
          >
            <span style={{ marginRight: "20px" }} />
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
            {"Tambah Kelas"}
          </DialogTitle>
          <DialogContent>
            <form onSubmit={e => e.preventDefault()}>
              {/* Piih Kelas */}

              <select
                style={{ maxWidth: "93%", margin: "20px 20px 10px 20px" }}
                className="form-control"
                value={listNamaKelas.id_kelas}
                name="id_kelas"
                onChange={e => this.props.setField(e)}
                onClick={() => this.props.getMaPel()}
              >
                <option>Nama kelas</option>
                {listNamaKelas.map((item, key) => {
                  return (
                    <option value={item.id_kelas} key={key}>
                      {item.nama_kelas}
                    </option>
                  );
                })}
              </select>

              {/* Pilih Kelas (end) */}

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
                  name="waliKelas"
                  type="text"
                  label="Wali Kelas"
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
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Tambahkan
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  "id_kelas, listMapel, listNamaKelas, id_mapel, is_login, listTingkat",
  actions
)(PopupKelas);
