<template>
  <h2 class="char-creator--review-title">Review</h2>
  <div class="col-12 char-creator--review-details">
    <p>Race: {{ character.race }}</p>
    <p>Path: {{ character.path }}</p>
    <p>Name: {{ character.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["character"],
  data() {},
  computed: {},
};
</script>
