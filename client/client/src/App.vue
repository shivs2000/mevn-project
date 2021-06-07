<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'
import FrontPage from './components/FrontPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import ProfileUpload from './components/ProfileUpload.vue'

export default {
  name: 'App',
  components: {Login,HelloWorld,FrontPage,ProfilePage

  }
}
</script>

<style>

</style>
