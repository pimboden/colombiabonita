<template>
  <nuxt-link :to="switchLocalePath($i18n.locale)">
    <template v-if="$vuetify.theme.dark">
    <img src="/assets/icons/logo-colombia-bonita_dark.png" class="main-logo" :alt="alt"/>
    </template>
    <template v-else>
    <img src="/assets/icons/logo-colombia-bonita_light.png" class="main-logo" :alt="alt"/>
    </template>
    
  </nuxt-link>
</template>

<script>
export default {
 name:'MainLogo',
  props: {
    alt: {
      type: String,
      default: ''
    },
  },
}
</script>

<style>

</style>