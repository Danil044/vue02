<template>
  <h1> Все портфолио </h1>
  <ul >
    <!--<li v-for='item in items' :key="item.id">{{item.name}}</li>-->
    <PortfolioItems  v-for="item in items"
                     :key="item.id"
                     :item="item">
    </PortfolioItems>
    <button v-on:click="deleteEvent(index)">Delete</button>
  </ul>
  <p>
    <input type="text" v-model="FormInput">
    <button v-on:click="addItems" >Add</button>
  </p>
</template>

<script>
import PortfolioItems from '@/components/portfolio/PortfolioItems'

export default {
  name: 'PortfolioList',
  components: { PortfolioItems },
  data () {
    return {
      FormInput: '',
      nextToDoId: 3,
      index: { name: '' },
      items: [{ id: 1, name: 'pic1' }, { id: 2, name: 'pic2' }]
    }
  },
  methods: {
    addItems: function () {
      this.items.push({
        id: this.nextToDoId++,
        name: this.FormInput
      })
      this.FormInput = ''
    },
    deleteEvent: function (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>
