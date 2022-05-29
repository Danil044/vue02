import { createStore } from 'vuex'
import myFirstValues from '@/store/modeles/myFirstValues'
import toasts from '@/store/Toasts'
import Logs from '@/store/Logs'
import songLyrics from '@/store/modeles/songLyrics'
import myArray from '@/store/modeles/MyArray'
import auth from '@/store/modeles/auth'
import NovaPoshta from '@/store/modeles/NovaPoshta'
import portfolio from '@/store/modeles/portfolio'
import profile from '@/store/modeles/profile'

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
    songLyrics,
    myArray,
    auth,
    NovaPoshta,
    portfolio,
    profile
  }
})
