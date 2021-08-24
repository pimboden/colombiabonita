<template>
  <v-row class="youtube" justify="center" no-gutters>
    <v-col cols="12" class="mx-auto">
      <v-card class="pa-0 mx-1" elevation="0">
        <iframe
          width="100%"
          height="415"
          :src="src"
        >
        </iframe> </v-card></v-col
  ></v-row>
</template>

<script>
export default {
  name: 'CbYoutubeVideo',
  props: {
    src: {
      type: String,
      default: ''
    },
  },
}
</script>
