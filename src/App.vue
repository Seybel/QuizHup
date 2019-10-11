<template>
  <div id="app">

    <!-- <welcome-page></welcome-page> -->
    <router-view></router-view>

  </div>
</template>

<script>
import WelcomePage from "./components/WelcomePage.vue"


export default {
  name: "app",
  components: {
    'welcome-page': WelcomePage,
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
