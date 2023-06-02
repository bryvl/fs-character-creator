<template>
  <div class="container-fluid">
    <CharacterCreator />
    <CharacterList :characters="characters" />
  </div>
</template>

<script>
import CharacterCreator from "./components/CharacterCreator.vue";
import CharacterList from "./components/CharacterList.vue";

export default {
  components: {
    CharacterCreator,
    CharacterList,
  },
  data() {
    return {
      characters: [
        {
          _id: 1,
          name: "TestCharacter 1",
          race: "Human",
          class: "Warrior",
        },
        {
          _id: 1,
          name: "TestCharacter 2",
          race: "Human",
          class: "Warrior",
        },
        {
          _id: 1,
          name: "TestCharacter 3",
          race: "Human",
          class: "Warrior",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
