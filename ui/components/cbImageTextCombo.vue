<template>
  <v-row class="image-text-combo">
    <v-col cols="12" md="6" class="image">
      <v-card class="rounded" elevation="0">
        <template v-if="showLinkToGallery">
          <nuxt-link
            :to="
              localePath({
                name: 'gallery-finca',
                params: { finca: finca },
              })
            "
         >
            <div class="link-text py-4">{{ $t(translationKeyGalleryLinkText) }}</div>
            <img :src="imgPath" :alt="$t(translationKeyImgAlt)" />
          </nuxt-link>
        </template>
        <template v-else>
          <img :src="imgPath" :alt="$t(translationKeyImgAlt)" />
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" class="text">
         <v-card
        class="d-flex align-center mb-6"
        flat
        height="100%"
        tile
      >
      <v-card-text v-html="$t(translationKeyText)" />
         </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbImageTextCombo',
  props: {
    imgPath: {
      type: String,
      default: '',
    },
    translationKeyImgAlt: {
      type: String,
      default: '',
    },
    translationKeyGalleryLinkText: {
      type: String,
      default: '',
    },
    translationKeyText: {
      type: String,
      default: '',
    },
    finca: {
      type: String,
      default: '',
    },
    showLinkToGallery: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
