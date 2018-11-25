import React, { Component } from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
//Import untuk component2 editor soal
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../Styles/EditorSoal.css";
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

//Import untuk Component UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

class HalamanEdit extends Component {
  uploadImageCallBack = (file) => {

    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
        const data = new FormData(); // eslint-disable-line no-undef
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      },
    );
  }


  componentDidMount = () => {
    this.props.getKelas();
    this.props.getMaPel();
  };
  

  state = {
    editorState: EditorState.createEmpty(),
    deskripsi_soal: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    optionE: '',
    jawaban: ''
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      deskripsi_soal: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
    // console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
    console.log(this.state)
  }

  onJawabanChange = (e) => {
    this.setState({
      jawaban: e.target.value
    })
    // console.log(this.state)
  }

  onOptionChange = (e, option) => {
    if (option === "Pilihan A"){
      this.setState({optionA: e.target.value})
    }
    else if (option === "Pilihan B"){
      this.setState({optionB: e.target.value})      
    }
    else if (option === "Pilihan C"){
      this.setState({optionC: e.target.value})
    }
    else if (option === "Pilihan D"){
      this.setState({optionD: e.target.value})
    }
    else if (option === "Pilihan E"){
      this.setState({optionE: e.target.value})      
    }

    // console.log(this.state)
  }

  render() {
    // console.log(this.state)

    const listNamaKelas = this.props.listNamaKelas;
    let choice = ["A", "B", "C", "D", "E"];
    return (
      <div className="Halaman Edit">
        <h3 style={{ marginLeft: "20px" }}>Soal Nomor 1</h3>

        {/* Editor Soal */}
        <div style={{ margin: "20px" }}>
          <div className="rdw-storybook-root">
            <Editor
              toolbarClassName="rdw-storybook-toolbar"
              wrapperClassName="rdw-storybook-wrapper"
              editorClassName="rdw-storybook-editor"
              editorState={this.state.editorState}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: this.uploadImageCallBack,
                  alt: { present: true, mandatory: false }
                }
              }}
              onEditorStateChange={ this.onEditorStateChange }
            />
          </div>
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
                key={key}
                required
                id="outlined-required"
                label={option[key]}
                onChange={(e) => this.onOptionChange(e, option[key])}
                defaultValue={item.id_kelas}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: "20px", minWidth: "320px" }}
              />
            );
          })}
          {/* Edit Pilihan Jawaban (end) */}

          {/* Piih Jawaban Benar */}
          <div style={{ margin: "20px" }}>
            <select name="jawaban" className="form-control" onChange={(e) => this.onJawabanChange(e)}>
              <option>Pilih Jawaban Benar</option>
              {choice.map((item, key) => {
                return (
                  <option key={key} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
        {/* Pilih Jawaban Benar (end) */}

        {/* Kumpulan Button Navigasi */}
        <Link
          className="btn btn-primary"
          to="/"
          style={{ minWidth: "320px", margin: "20px", marginBottom: "0px" }}
        >
          Simpan dan Lanjutkan
        </Link>
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
              return (
                <option key={key} value={item.id_kelas}>
                  {item.nama_kelas}
                </option>
              );
            })}
          </select>
        </div>
        {/* Navigasi Soal (end) */}
        {/* <textarea
          disabled
          value={ draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}

export default connect(
  "listNamaKelas, listMapel",
  actions
)(HalamanEdit);
