<template>
  <v-container class="content aboutus px-0 pt-0">
    <cb-carousel file="home.json" img-path="home"></cb-carousel>
    <cb-page-title translation-key="content.aboutUs.title" />
    <cb-body-text translation-key="content.aboutUs.text1" />
  </v-container>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      es: '/quienes_somos',
      en: '/about_us',
      de: '/ueber_uns',
    },
  },
  head() {
    return {
      title: this.$t('content.aboutUs.title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t('content.aboutUs.metaDesrciption'),
        },
      ],
    }
  },
}
</script>
