<template>
  <h1> Все портфолио </h1>
  <ul>
    <li v-for='item in items' :key="item.id">{{item.name}}</li>
    <input v-model="count">
    <button @click="plus1">+1</button>
    <button @click="plus2">+2</button>
    <div v-if="count < 10">
      меньше 10
    </div>
    <div v-else>
      болешь 10
    </div>
  </ul>
</template>

<script>
export default {
  name: 'PortfolioList',
  methods: {
    plus1 () {
      this.count++
    },
    plus2 () {
      this.count += 2
    }
  },
  data () {
    return {
      items: [{ id: 1, name: 'pic1' }, { id: 2, name: 'pic2' }]
    }
  }
}
</script>

<style scoped>
</style>
