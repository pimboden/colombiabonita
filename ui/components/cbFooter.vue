<template>
  <v-footer app class="cb-footer pb-0" :absolute="true">
    <v-container fluid class="mx-0 px-0">
      <v-row>
        <v-col cols="12" class="pa-0 outer-col">
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-card
                  class="
                    d-flex
                    flex-column
                    justify-center
                    align-center
                    mb-0
                    footer-col-wrapper
                  "
                  flat
                  tile
                >
                  <v-card
                    class="justify-center pa-2 footer-col-title"
                    outlined
                    tile
                  >
                    {{ leftFooterTitle }}
                  </v-card>
                  <v-card
                    class="d-flex flex-row pa-2 footer-col-content-wrapper"
                    outlined
                    tile
                  >
                    <v-card
                      class="justify-center pa-2 footer-col-content"
                      outlined
                      tile
                    >
                      <a :href="ytLink" target="_blank"
                        ><img
                          src="/assets/icons/youtube-small.png"
                          :alt="$t('cbFooterComp.altYoutubeLogo')"
                      /></a>
                    </v-card>
                    <v-card
                      class="justify-center pa-2 footer-col-content"
                      outlined
                      tile
                    >
                      <a :href="fbLink" target="_blank"
                        ><img
                          src="/assets/icons/fb-small.png"
                          :alt="$t('cbFooterComp.altFbLogo')"
                      /></a>
                    </v-card>
                    <v-card
                      class="justify-center pa-2 footer-col-content"
                      outlined
                      tile
                    >
                      <a :href="insLink" target="_blank"
                        ><img
                          src="/assets/icons/insta-small.png"
                          :alt="$t('cbFooterComp.altInstLogo')"
                      /></a>
                    </v-card>
                  </v-card>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <div class="vertical-line hidden-sm-and-down"></div>
                <v-card
                  class="
                    d-flex
                    flex-column
                    justify-center
                    align-center
                    mb-0
                    footer-col-wrapper
                  "
                  flat
                  tile
                >
                  <v-card
                    class="justify-center pb-2 footer-col-title"
                    outlined
                    tile
                  >
                    {{ rightFooterTitle }}
                  </v-card>
                  <v-card class="pa-2 footer-col-content-wrapper" outlined tile>
                    <v-card
                      class="justify-center px-2 footer-col-content"
                      outlined
                      tile
                    >
                      <a
                        :href="'tel:' + phone"
                        type="tel"
                        class="contact-link tel"
                        >{{ phone }}</a
                      >
                    </v-card>
                    <v-card
                      class="justify-center pa-2 footer-col-content"
                      outlined
                      tile
                    >
                      <nuxt-link
                        :to="localePath('contact')"
                        class="contact-link email"
                        >{{ contactFormLinkTitle }}</nuxt-link
                      >
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
  name: 'CbFooter',
  props: {
    leftFooterTitle: {
      type: String,
      default:''
    },
    rightFooterTitle: {
      type: String,
      default:''
    },
    fbLink: {
      type: String,
      default:''
    },
    ytLink: {
      type: String,
      default:''
    },
    insLink: {
      type: String,
      default:''
    },
    phone: {
      type: String,
      default:''
    },
    contactFormLinkTitle: {
      type: String,
      default:''
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
