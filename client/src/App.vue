<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <router-view />
    </div>
  </div>
</template>

<script>
// import CharacterCreator from "./components/CharacterCreator.vue";
// import CharacterList from "./components/CharacterList.vue";
// import HomeScreen from "./components/HomeScreen.vue";

export default {
  name: "App",
};
</script>

<style>
#app {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 100vh;
  background-color: #1d2c47;
  color: #e1e2ee;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
