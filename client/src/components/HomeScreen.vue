<template>
  <div class="home">
    <h1 class="game-header">Dark Seas</h1>
    <div class="row">
      <div class="col-12">
        <b-button class="menu-btn" @click="navigateToCharacterCreator"
          >Create New Character</b-button
        >
        <b-button class="menu-btn" @click="navigateToCharacterList"
          >Load Existing Character</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    navigateToCharacterCreator() {
      this.$router.push("/create");
    },
    navigateToCharacterList() {
      this.$router.push("/character-select");
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
.game-header {
  padding: 64px 0px;
}
.menu-btn {
  margin: 6px;
  padding: 24px 12px;
  background-color: #080223;
  border-color: #080223;
  visibility: hidden;
}
</style>
