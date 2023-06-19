<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-12 navbar-wrapper">
        <Navigation />
      </div>
    </div>
    <div class="row content-row">
      <div class="col-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation/NavHeader.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  height: 100vh;
  background-color: #1d2c47;
  color: #e1e2ee;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .row > .col-12.navbar-wrapper {
  padding-left: 0px;
  padding-right: 0px;
}
.content-row {
  padding: 12px;
}
</style>
