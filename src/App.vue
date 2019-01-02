<template>
  <div id="app">
    <router-view></router-view>
    <main-tabBar></main-tabBar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
#app {
  @import "assets/css/base.css";
}
</style>
