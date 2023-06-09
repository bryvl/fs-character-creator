<template>
  <h1>Choose Your Race:</h1>
  <b-form>
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
      options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
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
