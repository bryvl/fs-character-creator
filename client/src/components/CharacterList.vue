<template>
  <div>
    <b-list-group class="character-list row">
      <b-list-group-item
        class="character-list-item col-12"
        v-for="character in characters"
        :key="character._id"
      >
        {{ character.name }} - {{ character.race }} - {{ character.class }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>
