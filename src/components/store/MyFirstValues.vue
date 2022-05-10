<template>
  <p>Первая переменная {{ myFirstValues }} </p>
  <button v-on:click="onBtnClick">Commit to 10</button>
  <input v-model="myVModel">
  <button @click="onBtnUpdate">Update</button>
  <button @click="putToast">Toast</button>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyFirstValues',
  setup () {
    const store = useStore()

    return {
      putToast: function () {
        store.dispatch('toastInfo', 'Hello')
      },

      // myFirstValues: computed(() => store.getters.getMyFirstValue())
      // count: computed(() => store.getters.getMyFirstValue)
      // myFirstValues: store.getters.myFirstValues
      myFirstValues: computed(() => store.getters.getMyFirstValue),

      onBtnClick: function () {
        store.commit('setMyFirstValue', 10)
      },

      myVModel: computed({
        get () {
          console.log('get')
          return store.getters.getMyFirstValue.toString()
        },
        set (data) {
          console.log('set')
          store.commit('setMyFirstValue', data)
        }
      }),

      onBtnUpdate: function () {
        store.dispatch('apiGetMyFirstValue')
      }

    }
  }
})
</script>

<style scoped>

</style>
