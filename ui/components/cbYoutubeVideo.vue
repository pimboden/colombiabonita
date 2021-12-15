<template>
  <v-row class="youtube" justify="center" no-gutters>
    <v-col cols="12" class="mt-6">
      <v-card class="pa-0" elevation="0">
        <iframe
          width="100%"
          height="415"
          :src="blok.videoLink.url"
        >
        </iframe> </v-card></v-col
  ></v-row>
</template>

<script>
export default {
  name: 'CbYoutubeVideo',
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
