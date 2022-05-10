<template>
  <MySelect></MySelect>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
    <BTable :items="items">

    </BTable>
</template>
<script>
import { BButton, BTable } from 'bootstrap-vue-3'
import MySelect from '@/components/bootstrap/MySelect'
export default {
  components: { MySelect, 'b-button': BButton, BTable },
  methods: {
    onCLick () {
      this.$toast.success('Order placed.', {
        // override the global option
        position: 'top'
      })
    }
  },
  data () {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ]
    }
  },
  name: 'BootStrap'
}

</script>
