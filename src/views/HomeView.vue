<template>
 <MyProfile></MyProfile>
</template>

<script>
// @ is an alias to /src
import MyProfile from '@/components/auth/MyProfile'

export default {
  name: 'HomeView',
  components: {
    MyProfile
  }
}
</script>
