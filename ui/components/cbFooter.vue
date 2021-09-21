<template>
  <v-footer app class="cb-footer pb-0" :absolute="true">
    <v-container  fluid class="mx-0 px-0">
      <v-row>
        <v-col cols="12" class="pa-0 outer-col">
      <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="d-flex flex-column justify-center align-center mb-0 footer-col-wrapper" flat tile>
            <v-card class="justify-center pa-2  footer-col-title" outlined tile>
              {{$t('cbFooterComp.title1')}}
            </v-card>
            <v-card class="d-flex flex-row pa-2  footer-col-content-wrapper" outlined tile>
              <v-card class="justify-center pa-2 footer-col-content" outlined tile>
                <a href="https://youtube.com" target="_blank" ><img src="/assets/icons/youtube-small.png" :alt="$t('cbFooterComp.altYoutubeLogo')" /></a>
              </v-card>
              <v-card class="justify-center pa-2 footer-col-content" outlined tile>
                <a href="https://facebook.com" target="_blank" ><img src="/assets/icons/fb-small.png" :alt="$t('cbFooterComp.altFbLogo')" /></a>
              </v-card>
              <v-card class="justify-center pa-2 footer-col-content" outlined tile>
                <a href="https://instagram.com" target="_blank" ><img src="/assets/icons/insta-small.png" :alt="$t('cbFooterComp.altInstLogo')" /></a>
              </v-card>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <div class="vertical-line hidden-sm-and-down"></div>
                    <v-card class="d-flex flex-column justify-center align-center mb-0 footer-col-wrapper" flat tile>
            <v-card class="justify-center pb-2  footer-col-title" outlined tile>
              {{$t('cbFooterComp.title2')}}
            </v-card>
            <v-card class="pa-2  footer-col-content-wrapper" outlined tile>
              <v-card class="justify-center px-2 footer-col-content" outlined tile>
                <a :href="'tel:' + $t('cbFooterComp.phone')" type="tel" class="contact-link tel">{{$t('cbFooterComp.phone')}}</a>
              </v-card>
              <v-card class="justify-center pa-2 footer-col-content" outlined tile>
                <nuxt-link :to="localePath('contact')"class="contact-link email">{{$t('cbFooterComp.contactForm')}}</nuxt-link>
              </v-card>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name:"CbFooter",
  data() {
    return {}
  },
}
</script>

<style></style>
