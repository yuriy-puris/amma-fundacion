import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store ({
  state: {
    menu_list: null,
    pages: null,
    page_exhibitions: null
  },
  actions: {
    LOAD_MENU_LIST: function({commit}) {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18')
        .then((response) => {
            commit('SET_MENU_LIST', { menu_list: response.data.items })
          },
          (err) => {
            console.log(err)
          }
        )
    },
    LOAD_PAGE_LIST: function({commit}) {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/pages')
        .then((response) => {
          commit('SET_PAGE_LIST', { pages: response.data })
        },
        (err) => {
          console.log(err)
        }
      )
    },
    LOAD_EXHIBITIONS: function({commit}) {
      axios.get('http://amma-test.bigdropinc.net/wp-json/wp/v2/exhibitions')
        .then((response) => {
            commit('SET_EXHIBITIONS', { page_exhibitions: response.data })
          },
          (err) => {
            console.log(err)
          }
        )
    }
  },
  mutations: {
    SET_MENU_LIST: (state, { menu_list }) => {
      state.menu_list = menu_list
    },
    SET_PAGE_LIST: (state, { pages }) => {
      state.pages = pages
    },
    SET_EXHIBITIONS: (state, { page_exhibitions }) => {
      state.page_exhibitions = page_exhibitions
    },
  },
})

export default store
