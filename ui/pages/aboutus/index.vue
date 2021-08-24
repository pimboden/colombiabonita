<template>
   <v-container class="content aboutus px-0 pt-0">

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
      de: '/ueber_uns'
    }
  },
}
</script>