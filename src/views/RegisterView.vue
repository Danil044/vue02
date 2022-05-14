<template>
  <MyRegister></MyRegister>
  <MyLogins></MyLogins>
</template>

<script>
import MyRegister from '@/components/auth/MyRegister'
import MyLogins from '@/components/auth/MyLogins'
export default {
  name: 'RegisterView',
  components: { MyLogins, MyRegister }
}
</script>

<style scoped>

</style>
