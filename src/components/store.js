import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store ({
  state: {
    pages: null
  },
  actions: {
    LOAD_PAGE_LIST: function({commit}) {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/pages')
        .then((response) => {
          commit('SET_PAGE_LIST', { pages: response.data })
        },
        (err) => {
          console.log(err)
        }
      )
    }
  },
  mutations: {
    SET_PAGE_LIST: (state, { pages }) => {
      state.pages = pages
    }
  },
})

export default store
