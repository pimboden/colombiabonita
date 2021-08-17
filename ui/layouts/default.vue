<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4"><main-logo /></v-col>
        <v-col  cols="12" md="4"><slogan/></v-col>
        <v-col  cols="12" md="4">
          <v-row>
           <v-col cols="12" class="text-right"><color-mode-picker />
            </v-col>
          </v-row>
         <lang-changer />
        </v-col>
      </v-row>
       <v-row>
         <v-col cols="12">
          <main-nav />
         </v-col>
       </v-row>
    </v-container>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
