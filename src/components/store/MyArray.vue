<template>
<h1>My array</h1>
  <div>
    <label>Filter</label>
    <input v-model="strFilter">
  </div>
  <ul>
    <li v-for="(el, index) in myArray" :key="el.id" >
      {{index}}. {{ el.name }}
      <button :value=el.id @click="delId">delete id</button>
      <!--<button :value=index @click="delIndex">delete index</button>-->
    </li>
  </ul>
  <div>
    <label>new element</label>
    <input v-model="newElement">
    <button @click="push">push</button>
    <button @click="pop">pop</button>
    <button @click="clear"> clear </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import generateUUID from '@/helpers/guid'

export default {
  name: 'MyArray',

  setup () {
    const store = useStore()
    const strPush = ref('new Element')
    const strFilter = ref('')

    return {
      myArray: computed(() => store.getters.getMyArray(strFilter.value)),
      strFilter: strFilter,
      newElement: strPush,
      push: function () {
        store.commit('setMyArrayPush',
          { name: strPush.value, id: generateUUID() })
      },
      pop: function () {
        store.commit('getMyArrayPop')
        const el = store.getters.myArrayPop
        console.log(el)
      },
      delIndex: function (el) {
        store.commit('setMyArrayDeleteIndex', el.target.value)
      },
      delId: function (el) {
        store.commit('setMyArrayDelId', el.target.value)
      },
      clear: function () {
        store.commit('setMyArrayClear')
      }
    }
  }
}
</script>

<style scoped>

</style>
