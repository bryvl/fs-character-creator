<template>
  <div class="character-select">
    <h1>Select a Character</h1>
    <CharacterList />
  </div>
</template>

<script>
import CharacterList from "./CharacterList.vue";

export default {
  components: {
    CharacterList,
  },
};
</script>

<style scoped>
.character-select {
  text-align: center;
}
</style>
