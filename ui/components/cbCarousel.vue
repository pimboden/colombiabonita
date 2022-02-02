<template>
  <v-row v-if = "blok.images.length > 0" v-editable="blok" class="carousel">
    <v-col cols="12" class="pt-0 content">
      <v-carousel
        v-if="blok.images.length > 1"
        cycle
        continuous
        hide-delimiters
        show-arrows-on-hover
        class="cb-carousel"
        height="650"
      >
        <v-carousel-item v-for="(image, i) in blok.images" :key="i" eager>
          <div class="banner-content">
           <v-img :src="image.filename" height="650" eager :alt="image.alt"/>
           <div v-if="image.alt" class="banner-text"><span>{{image.alt}}</span></div>
           </div>
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
