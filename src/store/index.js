import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'

Vue.use(Vuex)
var offset = 0
const store = new Vuex.Store({
  state: {
    isLoading: true,
    gifs: [],
    pagination: {
      step: 12,
      page: 1
    },
    appi_key: 'd03c2f2de6e44daf9696172a4a0b546d',
    lemit: 12
  },
  getters: {
    gifs (state) {
      return state.gifs
    }
  },
  mutations: {
    set (state, {type, items}) {
      state[type] = items
    }
  },
  actions: {
    search ({commit}, query) {
      offset = 0
      const url = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + store.state.appi_key + '&limit=' + store.state.lemit
      $.getJSON(url).then(function (data) {
        const gifs = data
        commit('set', {type: 'gifs', items: gifs})
      }, function (error) {
        console.log(error)
      })
    },
    searchNext ({commit}, query) {
      offset += 12
      const url = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + store.state.appi_key + '&limit= ' + store.state.lemit + ' &offset=' + offset
      $.getJSON(url).then(function (data) {
        const gifs = data
        commit('set', {type: 'gifs', items: gifs})
      }, function (error) {
        console.log(error)
      })
    },
    searchPrev ({commit}, query) {
      offset -= 12
      const url = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + store.state.appi_key + '&limit=' + store.state.lemit + '&offset=' + offset
      $.getJSON(url).then(function (data) {
        const gifs = data
        commit('set', {type: 'gifs', items: gifs})
      }, function (error) {
        console.log(error)
      })
    },
    randomgif ({commit}) {
      offset = 0
      const url = 'http://api.giphy.com/v1/gifs/trending?&api_key=' + store.state.appi_key + '&limit=' + store.state.lemit
      $.getJSON(url).then(function (data) {
        const gifs = data
        commit('set', {type: 'gifs', items: gifs})
      }, function (error) {
        console.log(error)
      })
    }
  }
})

export default store
