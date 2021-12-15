<template>
  <v-row class="image-text-combo">
    <v-col cols="12" md="6" class="image">
      <v-card class="rounded" elevation="0">
        <template v-if="blok.showLinkToGallery">
          <nuxt-link
            :to="
              localePath({
                name: 'galleries-slug',
                params: { slug: blok.finca },
              })
            "
          >
            <div class="link-text py-4">{{ blok.galleryLinkText }}</div>
            <img :src="blok.image.filename" :alt="blok.image.alt" />
          </nuxt-link>
        </template>
        <template v-else>
          <img :src="blok.image.filename" :alt="blok.image.alt" />
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" class="text">
      <v-card class="d-flex align-center mb-6" flat height="100%" tile>
        <v-card-text
          ><rich-text-renderer v-if="blok.text" :document="blok.text"
        /></v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbImageTextCombo',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style></style>
