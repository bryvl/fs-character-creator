<template>
  <div>
    <b-list-group class="character-list row">
      <b-list-group-item
        class="character-list-item"
        v-for="character in characters"
        :key="character._id"
      >
        <div class="char-list--info-wrap">
          <span class="char-list--name">|| {{ character.name }} ||</span>
          {{ character.race }} - {{ character.path }} - Lvl 1
        </div>
        <div class="char-list--actions">
          <!-- <button @click="deleteCharacter(character._id)">Delete</button> -->
          <i
            class="fa-solid fa-square-xmark"
            @click="deleteCharacter(character._id)"
          ></i>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      characters: [],
    };
  },
  async created() {
    try {
      const userId = this.$route.params.userId;

      const response = await api.getUserCharacters(userId);
      this.characters = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async deleteCharacter(id) {
      try {
        await api.deleteCharacter(id);

        this.characters = this.characters.filter(
          (character) => character._id !== id
        );
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
<style>
.list-group-item.character-list-item {
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 24px;
}

.list-group-item.character-list-item:hover {
  background-color: #080223;
  color: #ffffff;
  transform: scale(1.005);
}

.char-list--name {
  font-size: 1.25em;
  margin-right: 12px;
}
.char-list--actions i {
  /* background-color: blue;
  color: #ffffff; */
  font-size: 2.5em;
  transform: scale(1);
  transition: 0.3s transform ease-in-out;
}
.char-list--actions i:hover {
  cursor: pointer;
  transform: scale(1.25);
}
</style>
