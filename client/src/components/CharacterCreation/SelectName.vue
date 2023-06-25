<template>
  <div class="char-creator--form">
    <h2>Enter your name:</h2>
    <b-form @submit.prevent="submitName">
      <b-form-input
        id="input-name"
        v-model="selectedName"
        required
      ></b-form-input>
      <b-button type="submit">Submit</b-button>
    </b-form>
    <div v-if="confirmingName">
      Your name is {{ selectedName }}. Is that right?
      <div class="char-creator--confirm-name">
        <b-button class="create-char-btn" @click="confirmName">
          Yes, that's correct
        </b-button>
        <b-button class="create-char-btn" @click="cancelName">
          No, let me change it
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
  data() {
    return {
      selectedName: this.character.name,
      confirmingName: false,
    };
  },
  methods: {
    submitName(event) {
      event.preventDefault();
      this.confirmingName = true;
    },
    cancelName() {
      this.confirmingName = false;
    },
    confirmName() {
      this.$emit("update:characterName", this.selectedName);
      this.confirmingName = false;
    },
  },
};
</script>
<style>
.create-char-btn {
  margin: 12px;
}
</style>
