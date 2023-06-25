<template>
  <div class="row">
    <div class="col-12 creation-menu--nav">
      <router-link :to="`/create/${$route.params.userId}/race`"
        >Race</router-link
      >
      |
      <router-link :to="`/create/${$route.params.userId}/path`"
        >Path</router-link
      >
      |
      <router-link :to="`/create/${$route.params.userId}/name`"
        >Name</router-link
      >
      |
      <router-link :to="`/create/${$route.params.userId}/review`"
        >Review</router-link
      >
    </div>
    <div class="col-12 char-creator">
      <div class="col-12">
        <div class="row char-creator--info-display">
          <div v-if="isPathRoute" class="col-12">
            <SelectImgDisplay :character="character" />
            <p class="info-display--path-desc">
              {{ getPathDescription(this.character.path) }}
            </p>
            <div
              class="info-display--stats"
              v-html="getPathBaseStats(this.character.path)"
            ></div>
          </div>
        </div>
        <div class="col-12 char-creator--form">
          <router-view
            :character="character"
            @update:characterRace="handleRaceUpdate"
            @update:characterName="handleNameUpdate"
            @update:characterPath="handlePathUpdate"
          />
        </div>
      </div>
      <b-button
        v-if="isReviewRoute"
        :disabled="!isComplete"
        @click="submitCharacter"
        class="create-char-btn"
      >
        Create Character
      </b-button>
    </div>
  </div>
</template>

<script>
import api from "../../api.js";
import SelectImgDisplay from "./SelectImgDisplay.vue";

import NSColossusThumb from "@/assets/NS_Colossus_Thumb.png";
import NSDancerThumb from "@/assets/NS_Dancer_Thumb.png";
import NSSonimThumb from "@/assets/NS_Sonim_Thumb.png";
import NSValkyrieThumb from "@/assets/NS_Valkyrie_Thumb.png";
import NSWeaverThumb from "@/assets/NS_Weaver_Thumb.png";

import { gamePaths } from "@/data/gamePaths";

export default {
  data() {
    return {
      character: {
        name: "",
        race: "",
        path: "",
        baseStats: "",
        level: 1,
        userId: this.$route.params.userId,
      },
      gamePaths: gamePaths,
    };
  },
  computed: {
    isComplete() {
      return this.character.name && this.character.race && this.character.path;
    },
    classImagePath() {
      switch (this.character.path) {
        case "Colossus":
          return NSColossusThumb;
        case "Dancer":
          return NSDancerThumb;
        case "Sonim":
          return NSSonimThumb;
        case "Valkyrie":
          return NSValkyrieThumb;
        case "Weaver":
          return NSWeaverThumb;
        default:
          // Return a default image path if no matching class is found
          return "";
      }
    },
    isReviewRoute() {
      return this.$route.path.includes("/review");
    },
    isPathRoute() {
      return this.$route.path.includes("/path");
    },
  },
  methods: {
    async submitCharacter(event) {
      event.preventDefault();
      try {
        const userId = this.$route.params.userId;
        const response = await api.createCharacter(this.character, this.userId);
        this.$emit("character-created", response.data);
        this.$router.push({
          name: "CharacterSelect",
          params: { userId },
        });
      } catch (error) {
        console.error(error);
      }
    },
    handleNameUpdate(name) {
      this.character.name = name;
    },
    handleRaceUpdate(race) {
      this.character.race = race;
    },
    handlePathUpdate(charPath) {
      this.character.path = charPath;
    },
    getPathDescription(selectedPath) {
      const path = this.gamePaths.find(
        (path) => path.pathName === selectedPath
      );
      return path ? path.pathDescription : "";
    },
    getPathBaseStats(selectedPath) {
      const path = this.gamePaths.find(
        (path) => path.pathName === selectedPath
      );
      const baseStats = path ? path.pathBaseStats : {};
      return Object.entries(baseStats)
        .map(([stat, value]) => {
          return `<span class="stat-pair"><span class="stat-pair--name">${stat}:</span> <span class="stat-pair--baseValue">${value}</span></span>`;
        })
        .join(" ");
    },
  },
  components: { SelectImgDisplay },
};
</script>

<style>
.menu-btn.create-char-btn {
  margin: 12px;
  background-color: #080223;
  border-color: #080223;
}

.info-display--path-desc {
  padding: 24px;
}

.creation-menu--nav a {
  color: #ffffff;
  text-decoration: none;
  margin: 0px 12px;
}
.creation-menu--nav a:hover,
.creation-menu--nav a:active,
.creation-menu--nav a:focus {
  color: #77a9ff;
}
.char-creator {
  padding-top: 2em;
}
.char-creator--form {
  margin: 24px auto;
}
.char-creator--info-display {
  background-color: #191919;
  border: 1px solid #3b3c92;
}
.stats--stat-span {
  margin: 6px 12px;
}
.create-char-form {
  padding: 24px;
}

.char-creator .form-select {
  padding: 12px;
  margin: 12px auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23ffffff'><polygon points='0,0 100,0 50,50'/></svg>")
    no-repeat;
  background-size: 16px;
  background-position: calc(100% - 20px) 17px;
  background-repeat: no-repeat;
  background-color: transparent;
  text-align: center;
  color: #ffffff;
  border: unset;
  border-bottom: 2px solid #ffffff;
  border-radius: 0px;
}
.char-creator .form-select:focus {
  border-color: #ffffff;
  box-shadow: none;
}

#input-name {
  padding: 12px;
  margin: 12px auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  color: #ffffff;
  border: unset;
  border-bottom: 2px solid #ffffff;
  border-radius: 0px;
}
#input-name:focus {
  box-shadow: none;
}

.char-creator--form {
  padding: 36px;
}

form .btn {
  margin: 12px 0px;
  background-color: #080223;
  border-color: #080223;
}

.info-display--stats {
  padding: 24px 0px;
  border-top: 1px solid #292929;
  min-height: 100px;
}
.stat-pair {
  margin: 12px;
}
.stat-pair--name {
  text-transform: capitalize;
  font-weight: bold;
}
</style>
