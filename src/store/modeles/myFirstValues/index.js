import ajax from '@/store/ajax'

export default {
  // namespace: true,
  // набор данных который я хочу хранить и их начальные значения
  state: {
    myFirstValues: 0
  },
  // методы получения данных
  getters: {
    getMyFirstValue (state) {
      return state.myFirstValues
    }
  },
  // метод смены данных через commit
  mutations: {
    setMyFirstValue (state, data) {
      state.myFirstValues = data
    }
  },
  //
  actions: {
    apiGetMyFirstValue ({ state, commit, dispatch }) {
      console.log('Get Data')
      ajax.get('url')
      // fetch()
      //   .then()
      commit('setMyFirstValue', 'получил')
      dispatch('toastInfo', 'Ok')
    }
  },
  modules: {
  }
}
