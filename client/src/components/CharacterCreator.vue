<template>
  <div class="row">
    <div>
      <router-link to="/create/name">Name</router-link> |
      <router-link to="/create/race">Race</router-link> |
      <router-link to="/create/class">Class</router-link>
    </div>
    <router-view
      :character="character"
      @update:characterRace="handleRaceUpdate"
    />
    <div>
      Name: {{ character.name }} <br />
      Race: {{ character.race }} <br />
      Class: {{ character.class }} <br />
      <button :disabled="!isComplete" @click="submitCharacter">
        Create Character
      </button>
    </div>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      character: {
        name: "",
        race: "",
        class: "",
        level: 1,
      },
    };
  },
  computed: {
    isComplete() {
      return this.character.name && this.character.race && this.character.class;
    },
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      try {
        const response = await api.createCharacter(this.character);
        this.$emit("character-created", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    handleRaceUpdate(race) {
      this.character.race = race;
    },
  },
};
</script>

<style>
.create-char-form {
  padding: 24px;
}
.menu-btn.create-char-btn {
  margin: 12px 0px;
  background-color: #080223;
  border-color: #080223;
}
</style>
