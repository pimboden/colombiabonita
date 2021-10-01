<template>
  <v-row class="gallery"
    ><v-col cols="12">
      <template v-if="blok.slides.length > 0">
        <v-row>
          <v-col cols="12">
            <splide ref="primary" :options="primaryOptions">
              <splide-slide v-for="slide in blok.slides" :key="slide.filename">
                <img :src="slide.filename" :alt="slide.alt" />
              </splide-slide>
            </splide>
          </v-col>
          <v-col cols="12" class="pb-10">
            <splide ref="secondary" :options="secondaryOptions">
              <splide-slide v-for="slide in blok.slides" :key="slide.filename">
                <img :src="transformImage(slide.filename, '110x70')" :alt="$t(slide.alt)" />
              </splide-slide>
            </splide>
          </v-col>
        </v-row>
      </template> </v-col
  ></v-row>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
export default {
  name: 'CbGallery',
  props: {
    blok: {
      type: Object,
      required: true
    }/* name of the image folder path under /static/galleries */,
  },
  data() {
    return {
      primaryOptions: {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        fixedHeight: 600,
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
  mounted(){
    if(this.blok.slides.length > 0){
        this.$refs.primary.sync(this.$refs.secondary.splide)
    }
  },
  methods: {
     transformImage(image, option) {
      if (!image) return "";
      if (!option) return "";
      const imageService = "https://img2.storyblok.com/";
      const path = image.replace("https://a.storyblok.com", "");
      return imageService + option + path;
    }
  },
}
</script>

<style></style>
