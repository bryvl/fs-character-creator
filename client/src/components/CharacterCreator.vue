<template>
  <div class="row">
    <b-form class="create-char-form col-6 offset-3" @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Character Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="character.name"
          required
          placeholder="Enter character name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Race:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="character.race"
          required
          placeholder="Enter race"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Class:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="character.class"
          required
          placeholder="Enter class"
        ></b-form-input>
      </b-form-group>

      <b-button class="create-char-btn" type="submit" variant="primary">
        Create Character
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {
        name: "",
        race: "",
        class: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("create-character", this.character);
    },
  },
};
</script>

<style>
.create-char-form {
  padding: 24px;
}
.create-char-btn {
  margin: 12px 0px;
}
</style>
