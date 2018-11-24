import createStore from 'unistore'
import devtools from 'unistore/devtools'
import axios from 'axios'
import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter'

const initialState = {
    listNamaKelas: [],
    listMapel: []
}

const store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

const adapter = localStorageAdapter();
persistStore(store, adapter);

const actions = store => ({
    getKelas: async state => {
        // const url = `${process.env.DB_HOST}/kelas`;
        const url = 'http://13.251.97.170:5001/kelas';
        await axios
          .get(url)
          .then(response => {
            store.setState({
              listNamaKelas: response.data.data
            });
            console.log("Kelas: ", response);
          })
          .catch(err => {
            console.log(err);
          });
      },
    getMaPel: async state => {
        const url = 'http://13.251.97.170:5001/kelas-mapel/2';
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
    }

})

export { store, actions };