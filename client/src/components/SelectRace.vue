<template>
  <div>
    <h1>Choose your origin:</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="selectedRace"
          :options="options"
          required
        >
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary">Next</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
      default: () => ({ race: "" }),
    },
  },
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
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("update-character", this.character);
    },
  },
};
</script>
