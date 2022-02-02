<template>
  <v-row v-editable="blok" class="carousel" v-if = "blok.images.length > 0">
    <v-col cols="12" class="pt-0 content">
      <v-carousel
        cycle
        continuous
        v-if="blok.images.length > 1"
        hide-delimiters
        show-arrows-on-hover
        class="cb-carousel"
        height="700"
      >
        <v-carousel-item v-for="(image, i) in blok.images" :key="i" eager>
           <v-img :src="image.filename" height="700" eager :alt="image.alt"/>
        </v-carousel-item>
      </v-carousel>
      <v-img v-else :src="blok.images[0].filename" height="700" eager :alt="blok.images[0].alt"/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbCarousel',
    props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
