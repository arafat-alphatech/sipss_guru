import React, { Component } from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import axios from 'axios'
//Import untuk component2 editor soal
import { EditorState, convertToRaw, ContentState, convertFromHTML } from "draft-js";
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
  
  componentWillMount = () => {
    let id = this.props.match.params.id
    let cur_soal = this.props.current_all_soal.find((val, index) => {
      return val.no_soal == id
    })

    // cek apakah no soal ada di global state, kalau ada muncul di component
    if (cur_soal != undefined){
      // console.log(cur_soal.option_B)
      this.setState({
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(cur_soal.narasi)
          )
        ),
        deskripsi_soal: cur_soal.narasi,
        optionA: cur_soal.option_A,
        optionB: cur_soal.option_B,
        optionC: cur_soal.option_C,
        optionD: cur_soal.option_D,
        optionE: cur_soal.option_E,
        jawaban: cur_soal.jawaban,
        isEdit: true
      })
    }
  }

  componentDidMount = () => {
    this.props.getKelas();
    this.props.getMaPel();
  };
  
  InitialState = {
    editorState: EditorState.createEmpty(),
    deskripsi_soal: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    optionE: '',
    jawaban: '',
    isEdit: false
  };

  state = this.InitialState

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

  postNewSoal = () => {
      const {deskripsi_soal, optionA, optionB, optionC, optionD, optionE, jawaban} = this.state
      const no_soal = parseInt(this.props.match.params.id)
      if(deskripsi_soal == "" || optionA == "" || optionB == "" || optionC == "" || optionD == "" || optionE == "" || jawaban == "" ){
        alert("OOOO tidak bisaa....")
        this.props.history.push('#')
        console.log(this.state)
      }
      else {  
        const url = 'http://13.251.97.170:5000/soal';
        const data = {
          id_paket_soal: this.props.id_paket_soal,
          narasi : this.state.deskripsi_soal,
          option_A : this.state.optionA,
          option_B : this.state.optionB,
          option_C : this.state.optionC,
          option_D : this.state.optionD,
          option_E : this.state.optionE,
          jawaban : this.state.jawaban,
          no_soal : no_soal
        }
        if(this.state.isEdit){
          axios
          .put(url, data)
          .then(response => {
            alert('Berhasil mengubah soal')
            this.props.editSoal(no_soal, data)       
            this.setState(this.InitialState)
            console.log('Res edit soal', response)
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          axios
          .post(url, data)
          .then(response => {
            alert('Berhasil menambah soal')
            this.props.addNewSoal(data)
            this.setState(this.InitialState)
            console.log('Res post new soal', response)
          })
          .catch(err => {
            console.log(err)
          })
        }
      }
  }

  onSwitchSoal = (e) => {
    let route = '/post-soal/' + e.target.value
    this.props.history.push(route)
  }

  render() {
    // console.log(this.state)
    // console.log(this.props.current_all_soal)

    const no_soal = this.props.match.params.id
    const route = "/post-soal/" + (parseInt(no_soal) + 1);
    const listNamaKelas = this.props.listNamaKelas;
    let choice = ["A", "B", "C", "D", "E"];
    return (
      <div className="Halaman Edit">
        <h3 style={{ marginLeft: "20px" }}>Soal Nomor {no_soal}</h3>

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
          {choice.map((item, key) => {
            let option = [ "Pilihan A","Pilihan B","Pilihan C","Pilihan D","Pilihan E"];
            let optionName = ["optionA","optionB","optionC","optionD","optionE"];
            return (
              <TextField
                key={key}
                required
                id="outlined-required"
                label={option[key]}
                onChange={(e) => this.onOptionChange(e, option[key])}
                defaultValue={this.state[optionName[key]]}
                margin="normal"
                variant="outlined"
                style={{ marginLeft: "20px", minWidth: "320px" }}
              />
            );
          })}
          {/* Edit Pilihan Jawaban (end) */}

          {/* Piih Jawaban Benar */}
          <div style={{ margin: "20px" }}>
            <select name="jawaban" className="form-control" onChange={(e) => this.onJawabanChange(e)} value={this.state.jawaban}>
              <option >Pilih Jawaban Benar</option>
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
          to={route}
          style={{ minWidth: "320px", margin: "20px", marginBottom: "0px" }}
          onClick={() => this.postNewSoal()}
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
          <select className="form-control" onChange={(e) => this.onSwitchSoal(e)} value={no_soal}>
            <option>Navigasi Soal</option>
            {
              this.props.current_all_soal.map((item, key) => {
              return (
                <option key={key} value={item.no_soal}>
                  {item.no_soal}
                </option>
                );
              })
            }
          </select>
        </div>
        {/* Navigasi Soal (end) */}

      </div>
    );
  }
}

export default connect(
  "listNamaKelas, listMapel, id_paket_soal, current_all_soal",
  actions
)(HalamanEdit);
