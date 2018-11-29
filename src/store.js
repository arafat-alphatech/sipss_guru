import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import persistStore from "unissist";
import localStorageAdapter from "unissist/integrations/localStorageAdapter";

const initialState = {
  id_kelas: "",
  id_mapel: "",
  id_tingkat: "",
  listMapel: [],
  listNamaKelas: [],
  listUjian: [],
  tanggal_ujian: "2018-11-25T10:30",
  kode_soal: "",
  jumlah_soal: "",
  no_soal: "",
  labels: [],
  data: [],
  listPaketSoal: [],
  id_paket_soal: "",
  current_all_soal: [],
  token: "",
  type: "",
  is_login: false,
  current_jumlah_soal: "",
  siap_cetak:[],
  listGuru:[],
  listSiswa:[],
  listKelas:[],
  listAllMapel:[],
  csvData : [],
  tableData : [],
  listMapelConj:[],
  listTingkat: [{"id_tingkat":1,"nama_tingkat":"VII"},{"id_tingkat":2,"nama_tingkat":"VIII"},{"id_tingkat":3,"nama_tingkat":"IX"}],
  adminToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDMzMjQxNDcsIm5iZiI6MTU0MzMyNDE0NywianRpIjoiNjFkMjc5YzMtZjMwNS00YmE0LWI3NTYtYzY1ZmUzZTA1MDc2IiwiZXhwIjoxNTQ1OTE2MTQ3LCJpZGVudGl0eSI6OTk5LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZF9hZG1pbiI6OTk5LCJuaXAiOjE3MDAwMX19.5m0P2mTpWqlEdTWLyqHpHfupJH5EMjVxHv7ZfxQW4r4" 
};

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
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/kelas-mapel/" + state.id_kelas;
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          listMapel: response.data.data
        });
        // console.log("mapel: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getKelas:async state => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/kelas/"+state.id_tingkat;
    await axios
      .get(url,{headers})
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
  getUjian: async (state, id_kelas, id_mapel) => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url =
      "http://13.251.97.170:5001/paket-kelas?id_kelas=" +
      id_kelas +
      "&id_mapel=" +
      id_mapel;
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          listUjian: response.data.data
        });
        // console.log("List ujian: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getSoalSiapCetak: async (state, id_paket_soal) => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/soal?id_paket_soal=" + id_paket_soal;
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          siap_cetak: response.data.data,
          jumlah_soal: response.data.jumlah_soal,
          id_paket_soal: id_paket_soal
        });
        console.log("Soal Siap Cetak: ", response.data.data);
        console.log("Target jumlah soal: ",response.data.jumlah_soal)
      })
      .catch(err => {
        console.log(err);
      });
  },
  checkJumlahSoal: async state =>{
    let n = 0;
    state.siap_cetak.map((item, key) => {
      n += 1;
    });
    store.setState({
      current_jumlah_soal: n
    });
  },
  getCurrentSoal: async (state, id_paket_soal) => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/soal?id_paket_soal=" + id_paket_soal;
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          current_all_soal: response.data.data,
          jumlah_soal: response.data.jumlah_soal
        });
        console.log("hasil get api current soal: ", response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  postNewUjian: async state => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/ujian";
    const data = {
      id_kelas: state.id_kelas,
      kode_soal: state.kode_soal,
      id_mapel: state.id_mapel,
      jumlah_soal: state.jumlah_soal,
      tanggal_ujian: state.tanggal_ujian
    };
    console.log("data yang dikirim ke API buat ujian", data);
    await axios
      .post(url, data,{headers})
      .then(response => {
        store.setState({
          id_paket_soal: response.data.id_paket_soal,
          current_all_soal: [],
          siap_cetak: []
        });
        alert("Tambah ujian berhasil");
        console.log("Response dari API: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getChartData: async state => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/dashboard";
    const data_kirim = {
      id_paket_soal: state.id_paket_soal,
      id_kelas: state.id_kelas
    };
    await axios
      .post(url, data_kirim,{headers})
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
  getRawDataFromAPI : async state => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/dashboard?id_kelas="+state.id_kelas+"&id_paket_soal="+state.id_paket_soal;
    await axios
      .get(url, {headers})
      .then(response => {
        store.setState({
          csvData : response.data.data
        })
        console.log(">>>>>>>>>><<<<<<<", state.csvData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getTableDataFromAPI: async state => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/dashboard-table?id_kelas="+state.id_kelas+"&id_paket_soal="+state.id_paket_soal;
    await axios
      .get(url, {headers})
      .then(response => {
        store.setState({
          tableData : response.data.data
        })
        console.log("==================", state.tableData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getPaketByMapel: async state => {
    const token = state.token        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/mapel";
    const data_kirim = {
      id_mapel: state.id_mapel,
      id_kelas: state.id_kelas
    };
    await axios
      .post(url, data_kirim, {headers})
      .then(response => {
        store.setState({
          listPaketSoal: response.data.data
        });
        console.log("List Paket Soal response api: ", response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  addNewSoal: (state, data) => {
    let cur_soal = state.current_all_soal;
    console.log(cur_soal);
    cur_soal.push(data);
    store.setState({
      current_all_soal: cur_soal
    });
    let n = 0;
    cur_soal.map((item, key) => {
      n += 1;
    });
    store.setState({
      current_jumlah_soal: n
    });
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
      })
      .catch(err => {
        alert("masukkan username dan password yang benar");
        console.log(err);
      });
  },
  signOutHandle: (state) => {
    store.setState({
      token: "",
      is_login: false
    })    
    alert('Sampai jumpa kembali')
  },
  editSoal: (state, no_soal, data) => {
    let cur_soal = state.current_all_soal;
    cur_soal.map((item, key) => {
      if (item.no_soal === no_soal) {
        return (cur_soal[key] = data);
      }
    });
    // console.log("cur_soal", cur_soal)
    store.setState({
      current_all_soal: cur_soal
    });
  },
  getAllGuru: async (state) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/guru";
    console.log(headers)
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          listGuru: response.data.data
        });
        console.log('data get guru', response.data.data)
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteGuru : async (state,id) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/guru/"+id;
    await axios
    .delete(url,{headers})
    .then(response => {
      alert("Delete Guru is Success!")
    })
    .catch(err => {
      console.log(err);
    });
  },
  getAllSiswa: async (state) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/siswa";
    console.log(headers)
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          listSiswa: response.data.data
        });
        console.log('data get siswa', response.data.data)
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteSiswa : async (state,id) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/siswa/"+id;
    await axios
    .delete(url,{headers})
    .then(response => {
      alert("Delete Siswa is Success!")
    })
    .catch(err => {
      console.log(err);
    });
  },
  getAllMapel: async (state) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/mapel";
    console.log(headers)
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          listAllMapel: response.data.data
        });
        console.log('Response dari API', response.data.data)
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteMapel : async (state,id) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/mapel/"+id;
    await axios
    .delete(url,{headers})
    .then(response => {
      alert("Delete Mapel is Success!")
    })
    .catch(err => {
      console.log(err);
    });
  },
  getAllKelas: async (state) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/kelas";
    console.log(headers)
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          listKelas: response.data.data
        });
        console.log('data get kelas', response.data.data)
      })
      .catch(err => {
        console.log(err);
      });
  },
  postNewGuru: async state => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/guru";
    const data = {
      nip: state.nip,
      nama: state.nama,
      alamat: state.alamat,
      jenis_kelamin: state.jenis_kelamin,
      telepon: state.telepon,
      username: state.username,
      password: state.password
    };
    await axios
      .post(url, data,{headers})
      .then(response => {
        store.setState({
          dataGuru: response.data,
        });
        alert("Tambah guru berhasil");
        console.log("Response dari API: ", response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getMapelKelas: async (state) => {
    const token = state.adminToken        
    const headers = {
        Authorization: "Bearer " + token
    };
    const url = "http://13.251.97.170:5001/admin/kelasmapelconj";
    console.log(headers)
    await axios
      .get(url,{headers})
      .then(response => {
        store.setState({
          listMapelConj: response.data.data
        });
        console.log('data get kelas mapel', response.data.data)
      })
      .catch(err => {
        console.log(err);
      });
  }
});

export { store, actions };
