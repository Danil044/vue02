/* import ajax from '@/store/ajax' */

export default {
  state: {
    songLyricsArray: [],
    songLyricsQuery: null,
    songLyricsErr: null,
    isPreload: false
  },
  // методы получения данных
  getters: {
    getSongsLyrics (state) {
      return state.songLyricsArray
    },
    getSongLyricsQuery (state) {
      return state.songLyricsQuery
    },
    getSongLyricsErr (state) {
      return state.songLyricsErr
    },
    getCanSendSongLyrics (state) {
      if (!state.songLyricsQuery) return false
      if (state.songLyricsQuery.length < 3) return true
      return false
    },
    getIsPreload (state) {
      return state.isPreload
    }
  },
  // метод смены данных через commit
  mutations: {
    setSongLyrics (state, data = null) {
      state.songLyricsArray = data
    },
    setIsPreload (state, data = null) {
      state.isPreload = data
    },
    setSongLyricsQuery (state, data) {
      state.songLyricsQuery = data
      if (data.length < 3) {
        state.songLyricsErr = ' < 3'
      } else {
        state.songLyricsErr = null
      }
    }
  },
  // запускает код через dispatch
  actions: {
    apiGetSongLyrics ({ state, commit, dispatch }) {
      dispatch('toastInfo', 'start')
      commit('setIsPreload', true)

      dispatch('apiFetch')

      dispatch('toastInfo', 'finish')
      commit('setIsPreload', false)
    },
    apiFetch ({ state, commit, dispatch }) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
          'X-RapidAPI-Key': '9893694da0msh69f3fff9063bfe6p1d1906jsndbecc5187a6f'
        }
      }

      fetch('https://genius-song-lyrics1.p.rapidapi.com/search?q=' +
        state.songLyricsQuery + '&per_page=10&page=1', options)
        .then(response => response.json())
        .then(response => {
          commit('setSongLyrics', response.response.hits)
        })
        .catch(err => {
          console.error(err)
          dispatch('errorLogAjax', 403)
        })
    }
  }
}
