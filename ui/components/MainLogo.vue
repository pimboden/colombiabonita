<template>
  <nuxt-link :to="switchLocalePath($i18n.locale)">
    <template v-if="$vuetify.theme.dark">
    <img src="/assets/icons/LogoColbon_dark.png" class="main-logo" :alt="$t('mainLogoComp.alt')"/>
    </template>
    <template v-else>
    <img src="/assets/icons/LogoColbon_light.png" class="main-logo" :alt="$t('mainLogoComp.alt')"/>
    </template>
    
  </nuxt-link>
</template>

<script>
export default {

}
</script>

<style>

</style>