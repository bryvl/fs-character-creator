<template>
  <div class="home">
    <h1 class="game-header">Dashboard</h1>
    <div class="row">
      <div class="col-12">
        <b-button class="menu-btn" @click="navigateToCharacterCreator"
          >Create New Character</b-button
        >
        <b-button class="menu-btn" @click="navigateToCharacterList"
          >Load Existing Character</b-button
        >
        <b-button class="menu-btn" @click="continueCampaign">Continue</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    navigateToCharacterCreator() {
      const userId = this.$route.params.userId;
      // console.log(userId);
      this.$router.push({
        name: "CharacterCreator",
        params: { userId },
      });
    },
    navigateToCharacterList() {
      const userId = this.$route.params.userId;
      // console.log(userId);
      this.$router.push({
        name: "CharacterSelect",
        params: { userId },
      });
    },
    continueCampaign() {
      console.log("Continuing Campaign");
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
  font-size: 2.5em;
}
.menu-btn {
  display: block;
  margin: 12px auto;
  padding: 12px;
  width: 50%;
  background-color: #080223;
  border-color: #080223;
}
</style>
