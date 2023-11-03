import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getChartData(context, param) {

      return axios
        .post(`http://127.0.0.1:8001/getData`, {
          Visual_name: param.Visual_name,
          Time: param.Time,
        })
        .then(response => {
          console.log(response);
          return response.data.data ? JSON.parse(response.data.data) : []
        })
        .catch(e => {
          return []
        })
    },
  },
  modules: {},
})
