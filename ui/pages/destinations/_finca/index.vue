<template>
  <v-container class="content destination-detail px-0 pt-0">
    <cb-carousel
      :file="fincaFile"
      :img-path="$route.params.finca"
    ></cb-carousel>
    <cb-page-title
      :translation-key="
        'content.destinations.' + $route.params.finca + '.title'
      "
    />
    <cb-body-text
      :translation-key="
        'content.destinations.' + $route.params.finca + '.text1'
      "
    />
    <cb-google-map :file="fincaFile" :finca="$route.params.finca" />
    <cb-image-text-combo v-if="$route.params.finca != 'stamarta'"
    :imgPath="'/assets/imagetextcombo/'+$route.params.finca+'.jpg'"
    :translationKeyImgAlt="'content.destinations.' + $route.params.finca + '.imageTextCombo.alt'"
    :translationKeyGalleryLinkText="'content.destinations.' + $route.params.finca + '.imageTextCombo.galleryLinkText'"
    :translationKeyText="'content.destinations.' + $route.params.finca + '.imageTextCombo.text'"
    :showLinkToGallery="true"
     :finca="$route.params.finca"
    ></cb-image-text-combo>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fincaFile: decodeURI(this.$route.params.finca) + '.json',
    }
  },
  head() {
    return {
      title: this.$t('content.destinations.title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t(
            'content.destinations.' +
              this.$route.params.finca +
              '.metaDesrciption'
          ),
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      es: '/destinos/:finca',
      en: '/destinations/:finca',
      de: '/zielorte/:finca',
    },
  },
}
</script>
