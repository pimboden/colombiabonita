<template>
  <v-container class="content destination-detail px-0 pt-0">
        <cb-carousel
          :file="fincaFile"
          :img-path="$route.params.finca"
        ></cb-carousel>
        <cb-page-title :translation-key="'content.destinations.' + $route.params.finca + '.title'" />
  </v-container>
</template>

<script>
export default {
 data(){
   return {
     fincaFile : decodeURI(this.$route.params.finca)+'.json'
   }
 },
 nuxtI18n: {
    paths: {
      es: '/destinos/:finca',
      en: '/destinations/:finca',
      de: '/zielorte/:finca'
    }
  },
}
</script>