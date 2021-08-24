<template>
  <v-row class="gallery"
    ><v-col cols="12">
      <template v-if="slides.length > 0">
        <splide ref="primary" :options="primaryOptions">
          <splide-slide v-for="slide in slides" :key="slide.src">
            <img :src="slide.src" :alt="slide.alt" />
          </splide-slide>
        </splide>

        <splide ref="secondary" :options="secondaryOptions">
          <splide-slide v-for="slide in slides" :key="slide.src">
            <img :src="slide.thumbnail" :alt="slide.alt" />
          </splide-slide>
        </splide>
      </template> </v-col
  ></v-row>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
export default {
  name: 'CbGallery',
  props: {
    file: {
      type: String,
      default: '',
    } /* name of the json file undes /static/galleries */,
    imgPath: {
      type: String,
      default: '',
    } /* name of the image folder path under /static/galleries */,
  },
  data() {
    return {
      primaryOptions: {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        fixedHeight: 400,
        cover: true,
        arrows: true,
        i18n: {
          prev: this.$t('galleryComp.prev'),
          next: this.$t('galleryComp.next'),
          first: this.$t('galleryComp.first'),
          last: this.$t('galleryComp.last'),
          slideX: this.$t('galleryComp.slideX'),
          pageX: this.$t('galleryComp.pageX'),
          play: this.$t('galleryComp.play'),
          pause: this.$t('galleryComp.pause'),
        },
      },
      secondaryOptions: {
        type: 'slide',
        rewind: true,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: 'center',
        isNavigation: true,
        updateOnMove: true,
        accesibility: true,
        arrows: false,
        i18n: {
          prev: this.$t('galleryComp.prev'),
          next: this.$t('galleryComp.next'),
          first: this.$t('galleryComp.first'),
          last: this.$t('galleryComp.last'),
          slideX: this.$t('galleryComp.slideX'),
          pageX: this.$t('galleryComp.pageX'),
          play: this.$t('galleryComp.play'),
          pause: this.$t('galleryComp.pause'),
        },
      },
      slides: [],
      count: 0,
    }
  },

  async mounted() {
    const jsonFilePath = process.env.HOST_NAME+'/galleries/' + this.file
    await this.loadImages(jsonFilePath)
    this.$refs.primary.sync(this.$refs.secondary.splide)
  },
  methods: {
    async loadImages(jsonFilePath) {
      const baseImagePath = process.env.HOST_NAME+'/galleries/' + this.imgPath + '/'
      const allItems = []
      const images = await this.$axios.$get(jsonFilePath)
      images.forEach((image) => {
        const img = { src: baseImagePath + image.src }
        if (image.alt) {
          img.alt = this.$t(image.alt)
        } else {
          img.alt = this.$t('galleryComp.noAltProvided')
        }
        if (image.thumbnail) {
          img.thumbnail = baseImagePath + image.thumbnail
        } else {
          img.thumbnail = img.src
        }
        allItems.push(img)
      })
      this.slides = allItems
    },
  },
}
</script>

<style></style>
