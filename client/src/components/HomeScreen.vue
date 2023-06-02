<template>
  <div class="home">
    <h1>Dark Seas</h1>
    <b-button class="menu-btn" @click="navigateToCharacterCreator"
      >Create New Character</b-button
    >
    <b-button class="menu-btn" @click="navigateToCharacterList"
      >Load Existing Character</b-button
    >
  </div>
</template>

<script>
export default {
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
  margin-top: 200px;
}
.menu-btn {
  margin: 6px;
  padding: 24px 12px;
  background-color: #080223;
  border-color: #080223;
}
</style>
