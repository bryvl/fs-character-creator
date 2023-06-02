<template>
  <div>
    <h1>Choose your role:</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="character.class"
          required
          placeholder="Enter role"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Next</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    };
  },
  methods: {
    selectClass(charClass) {
      this.$emit("update:characterClass", charClass);
    },
  },
};
</script>
