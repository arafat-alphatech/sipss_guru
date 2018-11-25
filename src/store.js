import createStore from 'unistore'
import devtools from 'unistore/devtools'
import axios from 'axios'
import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter'

const initialState = {
  id_kelas: "",
  id_mapel: "",
  id_paket_soal: "",
  listMapel: [],
  listNamaKelas: [],
  tanggal_ujian: "",
  kode_soal: "",
  jumlah_soal:"",
  no_soal:"",
  labels:[],
  data:[],
  listPaketSoal: []
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
        console.log("List Kelas: ", response);
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
    console.log("data yang dikirim ke API",data);
    await axios
      .post(url,data)
      .then(response => {
        console.log("Response dari API: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getChartData: async (state, id_paket_soal, id_kelas) => {
    const url = 'http://13.251.97.170:5001/dashboard';
        const data_kirim = {
            id_paket_soal: state.id_paket_soal,
            id_kelas: state.id_kelas
        };
        await axios
            .post(url, data_kirim)
            .then(response => {
                store.setState({
                    labels: response.data.no_soal,
                    data: response.data.persentase
                });
                console.log("data response dari api: ", response.data);
            })
            .catch(err => {
                console.log(err);
            });
  },
  getPaketByMapel: async (state) => {
    const url = 'http://13.251.97.170:5001/mapel' ;
    const data_kirim = {
      id_mapel: state.id_mapel,
      id_kelas: state.id_kelas
    };
    await axios
      .post(url,data_kirim)
      .then(response => {
        store.setState({
          listPaketSoal: response.data.data
        });
        console.log("List Paket Soal response api: ", response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
})

export { store, actions };