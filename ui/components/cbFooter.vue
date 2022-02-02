<template>
            <v-row class="cb-footer">
              <v-col cols="12" md="6" class="pb-0">
                <div
                  class="
                    d-flex
                    flex-column
                    justify-center
                    align-center
                    mb-0
                    footer-col-wrapper
                  "
                >
                  <div
                    class="justify-center pb-2 footer-title"
                  >
                    {{ leftFooterTitle }}
                  </div>
                  <div
                    class="d-flex flex-row pa-2 footer-col-content-wrapper"
                  >
                    <div
                      class="justify-center pa-2 footer-col-content"
                    >
                      <a :href="ytLink" target="_blank"
                        ><img
                          src="/assets/icons/youtube-small.png"
                          :alt="$t('cbFooterComp.altYoutubeLogo')"
                      /></a>
 
                      <a :href="fbLink" target="_blank"
                        ><img
                          src="/assets/icons/fb-small.png"
                          :alt="$t('cbFooterComp.altFbLogo')"
                      /></a>
                  
                      <a :href="insLink" target="_blank"
                        ><img
                          src="/assets/icons/insta-small.png"
                          :alt="$t('cbFooterComp.altInstLogo')"
                      /></a>
                  </div>
                </div>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="pb-0">
                <div class="vertical-line hidden-sm-and-down"></div>
                <div
                  class="
                    d-flex
                    flex-column
                    justify-center
                    align-center
                    mb-0
                    footer-col-wrapper
                  "
                >
                  <div
                    class="justify-center pb-2 footer-title"
                  >
                    {{ rightFooterTitle }}
                  </div>
                  <div class="pa-2  pb-0 footer-col-content-wrapper">
                    <div
                      class="justify-center px-2 footer-col-content"
                    >
                      <a
                        :href="'tel:' + phone"
                        type="tel"
                        class="contact-link tel"
                        >{{ phone }}</a
                      >
                    </div>
                    <div
                      class="justify-center pa-2 footer-col-content"
                    >
                      <nuxt-link
                        :to="localePath('contact')"
                        class="contact-link email"
                        >{{ contactFormLinkTitle }}</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>

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
