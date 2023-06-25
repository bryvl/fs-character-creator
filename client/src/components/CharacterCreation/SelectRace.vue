<template>
  <h2>Choose Your Race:</h2>
  <b-form class="char-creator--form">
    <b-form-group>
      <b-form-select
        id="race-select"
        v-model="selectedRace"
        :options="options"
        required
      ></b-form-select>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  props: ["character"],
  data() {
    return {
      options: ["Human", "Avium", "Praenobis", "Simulacra"],
    };
  },
  computed: {
    selectedRace: {
      get() {
        return this.character.race;
      },
      set(value) {
        this.$emit("update:characterRace", value);
      },
    },
  },
};
</script>
