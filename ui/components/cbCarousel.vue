<template>
  <v-row v-editable="blok" class="carousel">
    <v-col cols="12" class="pt-0 content">
      <v-carousel
        cycle
        continuous
        v-if="blok.images.length > 0"
        hide-delimiters
        class="cb-carousel"
        height="500"
      >
        <v-carousel-item v-for="(image, i) in blok.images" :key="i" eager>
           <v-img :src="image.filename" height="100%" eager :alt="image.alt"/>
        </v-carousel-item>
      </v-carousel>
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
