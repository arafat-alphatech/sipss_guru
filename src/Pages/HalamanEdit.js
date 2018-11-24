import React, { Component } from "react";
import { actions } from "../store";
import { connect } from "unistore/react";

//Import untuk component2 editor soal
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorSoal from "../Components/EditorSoal";
import "../Styles/EditorSoal.css";

//Import untuk Component UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

class HalamanEdit extends Component {
  componentDidMount = () => {
    this.props.getKelas();
    this.props.getMaPel();
  };

  state = { editorState: EditorState.createEmpty() };
  onChange = editorState => this.setState({ editorState });
  
  render() {
    const listNamaKelas = this.props.listNamaKelas;
    return (
      <div className="Halaman Edit">

        <h3 style={{ marginLeft: "20px" }}>Soal Nomor 1</h3>

        {/* Editor Soal */}
        <div style={{ margin: "20px" }}>
          <EditorSoal />
          <Divider light />
        </div>
        {/* Editor Soal (end) */}

        {/* Edit Pilihan Jawaban */}
        <form>
          {listNamaKelas.map((item, key) => {
            let option = [
              "Pilihan A",
              "Pilihan B",
              "Pilihan C",
              "Pilihan D",
              "Pilihan E"
            ];
            return (
              <TextField
                required
                id="outlined-required"
                label={option[key]}
                defaultValue={item.id_kelas}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: "20px", minWidth: "320px" }}
              />
            );
          })}
        </form>
        {/* Edit Pilihan Jawaban (end) */}

        {/* Piih Jawaban Benar */}
        <div style={{ margin: "20px" }}>
          <select className="form-control">
            <option>Pilih Jawaban Benar</option>
            {listNamaKelas.map((item, key) => {
              return <option value={item.id_kelas}>{item.nama_kelas}</option>;
            })}
          </select>
        </div>
        {/* Pilih Jawaban Benar (end) */}

        {/* Kumpulan Button Navigasi */}
        <Button
          variant="contained"
          color="primary"
          style={{ minWidth: "320px", margin: "20px", marginBottom: "0px" }}
        >
          Simpan dan Lanjutkan
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ minWidth: "320px", margin: "20px" }}
        >
          Kembali ke Menu Sebelumnya
        </Button>
        {/* Kumpulan Button Navigasi (end) */}

        {/* Navigasi Soal */}
        <div style={{ margin: "20px" }}>
          <select className="form-control">
            <option>Navigasi Soal</option>
            {listNamaKelas.map((item, key) => {
              return <option value={item.id_kelas}>{item.nama_kelas}</option>;
            })}
          </select>
        </div>
        {/* Navigasi Soal (end) */}
      </div>
    );
  }
}

export default connect(
  "listNamaKelas, listMapel",
  actions
)(HalamanEdit);
