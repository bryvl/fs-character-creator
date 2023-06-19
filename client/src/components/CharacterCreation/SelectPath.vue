<template>
  <h2>Choose Your Path:</h2>
  <b-form class="char-creator--form">
    <b-form-group>
      <b-form-select
        v-model="selectedPath"
        :options="options"
        required
      ></b-form-select>
    </b-form-group>
  </b-form>
  <!-- <SelectionDisplay :character="character" /> -->
</template>

<script>
// import SelectionDisplay from "./SelectionDisplay.vue";
import { gamePaths } from "@/data/gamePaths.js";

export default {
  props: ["character"],
  data() {
    return {
      options: gamePaths.map((gamePath) => gamePath.pathName),
    };
  },
  computed: {
    selectedPath: {
      get() {
        return this.character.path;
      },
      set(value) {
        this.$emit("update:characterPath", value);
      },
    },
  },
  // components: { SelectionDisplay },
};
</script>
