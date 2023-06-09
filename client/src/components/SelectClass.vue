<template>
  <h1>Choose Your Class:</h1>
  <b-form>
    <b-form-group>
      <b-form-select
        v-model="selectedClass"
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
    selectedClass: {
      get() {
        return this.character.class;
      },
      set(value) {
        this.$emit("update:characterClass", value);
      },
    },
  },
};
</script>
