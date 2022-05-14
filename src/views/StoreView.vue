<template>
  <h1>MyStore</h1>
  <MyFirstValues></MyFirstValues>
  <MyArray></MyArray>
</template>

<script>
import MyFirstValues from '@/components/store/MyFirstValues'
import MyArray from '@/components/store/MyArray'
export default {
  name: 'StoreView',
  components: {
    MyArray,
    MyFirstValues
  }
}
</script>

<style scoped>

</style>
