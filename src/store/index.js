import { createStore } from 'vuex'
import myFirstValues from '@/store/modeles/myFirstValues'
import toasts from '@/store/Toasts'
import Logs from '@/store/Logs'
import songLyrics from '@/store/modeles/songLyrics'

export default createStore({
  strict: true,
  // Тут лучше всего что бы было пусто
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    myFirstValues,
    toasts,
    Logs,
    songLyrics
  }
})
