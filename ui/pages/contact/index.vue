<template>
  <v-container class="content contact px-0 pt-0">
    <cb-page-title translation-key="content.contact.title" />

    <v-row justify="center" no-gutters>
      <v-col cols="7">
        <ValidationObserver ref="obs" v-slot="{ validated }">
          <v-container>
            <v-row>
              <v-col cols="12" align="center" justify="end">
                <ValidationProvider
                  v-slot="{ valid }"
                  name="completeName"
                  rules="required"
                  mode="eager"
                >
                  <v-text-field
                    v-model="completeName"
                    maxlength="50"
                    filled
                    type="text"
                    prepend-icon="mdi-account-outline"
                    :label="$t('contact.form.completeName')"
                    :error-messages="
                      validated && !valid
                        ? $t('contact.validators.completeName')
                        : null
                    "
                    :success="
                      validated &&
                      valid
                    "
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="center" justify="end">
                <ValidationProvider
                  v-slot="{ valid }"
                  name="phone"
                  rules="required"
                  mode="eager"
                >
                  <v-text-field
                    v-model="phone"
                    maxlength="15"
                    filled
                    type="tel"
                    prepend-icon="mdi-phone-outline"
                    :label="$t('contact.form.phone')"
                    :error-messages="
                      validated && !valid
                        ? $t('contact.validators.phone')
                        : null
                    "
                    :success="
                      validated &&
                      valid
                    "
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
              <v-row>
              <v-col cols="12" align="center" justify="end">
                <ValidationProvider
                  v-slot="{ valid }"
                  name="email"
                  rules="required|email"
                  mode="eager"
                >
                  <v-text-field
                    v-model="email"
                    maxlength="50"
                    filled
                    type="email"
                    prepend-icon="mdi-email-outline"
                    :label="$t('contact.form.email')"
                    :error-messages="
                      validated && !valid
                        ? $t('contact.validators.email')
                        : null
                    "
                    :success="
                      validated &&
                      valid
                    "
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
                          <v-row>
              <v-col cols="12" align="center" justify="end">
                <ValidationProvider
                  v-slot="{ valid }"
                  name="message"
                  rules="required"
                  mode="eager"
                >
                  <v-textarea
                    v-model="message"
                    maxlength="50"
                    filled
                    rows="4"
                    prepend-icon="mdi-message-outline"
                    :label="$t('contact.form.message')"
                    :error-messages="
                      validated && !valid
                        ? $t('contact.validators.message')
                        : null
                    "
                    :success="
                      validated &&
                      valid
                    "
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="right" justify="end">
                <recaptcha
                  data-badge="inline"
                  data-size="invisible"
                  @recaptcha-error="recaptachaError"
                  @recaptcha-success="recaptchaSuccess"
                  @recaptcha-expired="recaptchaExpired"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="center" justify="end">
                <v-btn
                  :loading="isSubmiting"
                  :disabled="isSubmiting"
                  depressed
                  tile
                  class="ma-2 cb primary"
                  @click.stop.prevent="submit"
                  >{{ $t('contact.form.btnSend') }}
                  <template #loader>
                    <span class="custom-loader">
                      <v-icon light>mdi-loading</v-icon>
                    </span>
                  </template>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          </ValidationObserver>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
extend('required', required)
extend('email', email)
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      isSubmiting: false,
      completeName: '',
      phone:'',
      email:'',
      message:''
    }
  },
  created() {
    this.$recaptcha.language = this.$root.$i18n.locale
    this.$root.$on('language-changed', this.languageChanged)
  },
  methods: {
    languageChanged(code){
      this.$recaptcha.language = code
    },
    async submit() {
      this.isSubmiting = true
      debugger
      const isValid = await this.$refs.obs.validate()
      if (isValid) {
        window.setTimeout(function () {
          this.isSubmiting = false
        }, 2200)
      } else {
        window.setTimeout(function () {
          this.isSubmiting = false
        },5000)
      }
    },
    recaptachaError(...args) {
      // eslint-disable-next-line no-console
      console.log(...args)
    },
    recaptchaSuccess(...args) {
      // eslint-disable-next-line no-console
      console.log(...args)
    },
    recaptchaExpired(...args) {
      // eslint-disable-next-line no-console
      console.log(...args)
    },
  },
  nuxtI18n: {
    paths: {
      es: '/contacto',
      en: '/contact',
      de: '/kontakt',
    },
  },
}
</script>
