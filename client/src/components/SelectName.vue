<!-- Name.vue -->
<template>
  <div>
    <h1>What is your name, Voyager?</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="character.name"
          required
          placeholder="Enter character name"
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
      character: {
        name: "",
      },
    };
  },
};
</script>
