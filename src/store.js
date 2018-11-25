import createStore from 'unistore'
import devtools from 'unistore/devtools'
import axios from 'axios'
import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter'

const initialState = {
  id_kelas: "",
  id_mapel: "",
  listMapel: [],
  listNamaKelas: [],
  tanggal_ujian: "",
  kode_soal: "",
  jumlah_soal:"",
  id_paket_soal: "",
  current_all_soal: [],
  token: '',
  type:'',
  is_login: false
}

const store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

const adapter = localStorageAdapter();
persistStore(store, adapter);

const actions = store => ({
  setField: (state, event) => {
    return { [event.target.name]: event.target.value };
  },

  getMaPel: async state => {
    const url = 'http://13.251.97.170:5001/kelas-mapel/' + state.id_kelas;
    await axios
      .get(url)
      .then(response => {
        store.setState({
          listMapel: response.data.data
        });
        console.log("Kelas: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getKelas() {
    // const url = `${process.env.DB_HOST}/kelas`;
    const url = 'http://13.251.97.170:5001/kelas';
    axios
      .get(url)
      .then(response => {
        store.setState({
          listNamaKelas: response.data.data
        });
        // console.log("List Kelas: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  postNewUjian: async state => {
    const url = 'http://13.251.97.170:5001/ujian';
    const data = {
      id_kelas: state.id_kelas,
      kode_soal: state.kode_soal,
      id_mapel: state.id_mapel,
      tanggal_ujian: state.tanggal_ujian
    };
    alert("yaahaaa")
    console.log("data yang dikirim ke API",data);
    await axios
      .post(url,data)
      .then(response => {
        store.setState({
          id_paket_soal: response.data.id_paket_soal
        })
        alert('Tambah ujian berhasil')
        console.log("Response dari API: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },

  addNewSoal: (state, data) => {
    let cur_soal = state.current_all_soal
    console.log(cur_soal)
    cur_soal.push(data)
    store.setState({
      current_all_soal: cur_soal
    })
  },
  signInHandle: async (state, username, password) => {
    const url = "http://13.251.97.170:5001/login";

    const body = {
      username: username,
      password: password
    };
    await axios
      .post(url, body)
      .then(response => {
        store.setState({
          token: response.data.token,
          is_login: true
        });
        console.log("Response: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
})


export { store, actions };