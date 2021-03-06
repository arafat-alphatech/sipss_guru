import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";
import TextField from "@material-ui/core/TextField";
import swal from 'sweetalert';

class PopupEditRekap extends React.Component {
  state = {
    open: false,
    id_kelas:"",
    id_paket_soal:"",
    persen:"",
    persen_old:"",
    n_click : 0
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  doSetPersen = () => {
    const token = this.props.token;
    const headers = {
      Authorization: "Bearer " + token
    };
    const url = "https://sipss-api.online/scoring-persen";
    const data = {
      id_paket_soal: this.state.id_paket_soal,
      id_kelas: parseInt(this.state.id_kelas),
      persen: parseInt(this.state.persen) 
    };
    axios
    .post(url, data, { headers })
    .then(response => {
      swal("Edit Persentase berhasil");
      console.log("respon API edit persen: ", response);
        if (this.state.n_click == 0){
          this.setState({
            persen_old : this.state.persen
          })
          this.props.nambahPersen(parseInt(this.state.persen_old))
        }
        else{
          if(this.state.persen_old == this.state.persen){
          }
          else{
            this.props.nambahPersen(parseInt(this.state.persen)-parseInt(this.state.persen_old))
            this.setState({
              persen_old :this.state.persen
            })
          }
        }
        this.setState({ 
          n_click : this.state.n_click+1,
          open: false
         });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Buka tutup popup

  handleClickOpen = () => {
    this.setState({ 
      open: true,
      id_kelas : this.props.id_kelas,
      id_paket_soal : this.props.id_paket_soal,
      persen: this.state.persen
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Buka tutup popup (end)

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          <i
            title="edit mata pelajaran"
            style={{ color: "blue" }}
            className="fas fa-user-edit"
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
            {"Edit Persentase"}
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
                  name="persen"
                  type="text"
                  label={"Persentase Nilai: "}
                  defaultValue={this.state.persen}
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
            <Button onClick={() => this.doSetPersen()}color="primary" autoFocus>
              Simpan
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  "id_kelas, listMapel, listNamaKelas, id_mapel, is_login, listTingkat, token",
  actions
)(PopupEditRekap);
