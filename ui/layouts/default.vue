<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" :class="{'centerIt': $vuetify.breakpoint.smAndDown}"><main-logo /></v-col>
        <v-col cols="12" md="4" :class="{'centerIt': $vuetify.breakpoint.smAndDown}"><slogan /></v-col>
        <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12" class="text-right"><color-mode-picker /> </v-col>
          </v-row>
          <lang-changer />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pb-0">
          <main-nav />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="main-content-wrapper">
          <v-main class="pl-0">
            <nuxt />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
    <cb-footer />
  </v-app>
</template>

<script>
export default {
  mounted() {
    document.querySelector('html').setAttribute('lang', this.$i18n.locale)
  },
}
</script>
