<template>
  <v-container class="content gallery px-0 pt-0">
    <cb-page-title :translation-key="translationKey" />
    <cb-gallery :file="fincaFile" :img-path="$route.params.finca"></cb-gallery>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fincaFile: decodeURI(this.$route.params.finca) + '.json',
      translationKey:
        'content.gallery.' +
        decodeURI(this.$route.params.finca).toLowerCase() +
        '.title',
    }
  },
  head() {
    return {
      title: this.$t('content.gallery.title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t(
            'content.gallery.' + this.$route.params.finca + '.metaDesrciption'
          ),
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      es: '/galeria/:finca',
      en: '/gallery/:finca',
      de: '/gallerie/:finca',
    },
  },
}
</script>
