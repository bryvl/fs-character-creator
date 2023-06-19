<template>
  <div class="col-12 info-display--wrapper">
    <img
      v-if="character.path == 'Colossus'"
      :src="classImagePath"
      alt="Icon art for the Colossus Class"
      class="info-display--class-thumb"
    />
    <img
      v-if="character.path == 'Dancer'"
      :src="classImagePath"
      alt="Icon art for the Dancer Class"
      class="info-display--class-thumb"
    />
    <img
      v-if="character.path == 'Sonim'"
      :src="classImagePath"
      alt="Icon art for the Sonim Class"
      class="info-display--class-thumb"
    />
    <img
      v-if="character.path == 'Valkyrie'"
      :src="classImagePath"
      alt="Icon art for the Valkyrie Class"
      class="info-display--class-thumb"
    />
    <img
      v-if="character.path == 'Weaver'"
      :src="classImagePath"
      alt="Icon art for the Weaver Class"
      class="info-display--class-thumb"
    />
  </div>
</template>

<script>
import NSColossusThumb from "@/assets/NS_Colossus_Thumb.png";
import NSDancerThumb from "@/assets/NS_Dancer_Thumb.png";
import NSSonimThumb from "@/assets/NS_Sonim_Thumb.png";
import NSValkyrieThumb from "@/assets/NS_Valkyrie_Thumb.png";
import NSWeaverThumb from "@/assets/NS_Weaver_Thumb.png";

export default {
  props: ["character"],
  computed: {
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
  },
};
</script>

<style>
.info-display--wrapper {
  min-height: 200px;
}
.info-display--class-thumb {
  padding: 12px;
  width: 128px;
}
</style>
