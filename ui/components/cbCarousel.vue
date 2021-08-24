<template>
  <v-row class="carousel">
    <v-col cols="12" class="pt-0">
      <v-carousel
        v-if="items.length > 0"
        hide-delimiters
        class="cb-carousel"
        height="300"
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

  async mounted() {
    const jsonFilePath = '/carousels/' + this.file
    await this.loadImages(jsonFilePath)
  },
  methods: {
    async loadImages(jsonFilePath) {
      const allItems = []
      const homeCarousel = await this.$axios.$get(jsonFilePath)
      homeCarousel.forEach((element) => {
        const img = { src: '/carousels/' + this.imgPath + '/' + element }
        allItems.push(img)
      })
      this.items = allItems
    },
  },
}
</script>

<style></style>
