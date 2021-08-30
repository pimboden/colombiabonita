<template>
  <v-row class="carousel">
    <v-col cols="12" class="pt-0">
      <cb-spinner v-if="$fetchState.pending" />
      <v-carousel
        v-if="items.length > 0"
        hide-delimiters
        class="cb-carousel"
        height="400"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbCarousel',
  props: {
    file: {
      type: String,
      default: '',
    } /* name of the json file undes /static/carousels */,
    imgPath: {
      type: String,
      default: '',
    } /* name of the image folder path under /static/carousels */,
  },
  data() {
    return {
      items: [],
    }
  },

  async fetch() {
    const jsonFilePath = process.env.HOST_NAME+'/assets/carousels/' + this.file
    this.items= await this.loadImages(jsonFilePath)
  },
  methods: {
    async loadImages(jsonFilePath) {
      const allItems = []
      const homeCarousel = await this.$axios.$get(jsonFilePath)
      homeCarousel.forEach((element) => {
        const img = { src: process.env.HOST_NAME+'/assets/carousels/' + this.imgPath + '/' + element }
        allItems.push(img)
      })
      return allItems
    },
  },
}
</script>

<style></style>
