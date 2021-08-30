<template>
  <v-container class="content contact px-0 pt-0">
    <cb-page-title translation-key="content.contact.title" />
    <v-row v-if="!showResult" justify="center" no-gutters>
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
                    :success="validated && valid"
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
                    :success="validated && valid"
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
                    :success="validated && valid"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="center" justify="end">
                <v-select
                  v-model="reason"
                  :items="reasons"
                  filled
                  prepend-icon="mdi-message-question-outline"
                  item-text="translatedValue"
                  item-value="emailValue"
                  hide-details
                  :menu-props="{ top: false, offsetY: true }"
                  :label="$t('contact.form.reason')"
                ></v-select>
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
                    :success="validated && valid"
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
    <v-row v-else justify="center">
      <v-col cols="4">
        <v-alert outlined prominent :type="error ? 'error' : 'success'">
          <slot
            ><span
              v-html="
                error ? $t('contact.form.error') : $t('contact.form.success')
              "
            ></span
          ></slot>
        </v-alert>
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
      error: false,
      sent: false,
      isSubmiting: false,
      completeName: '',
      phone: '',
      email: '',
      message: '',
      reason: 'Cotizacion',
      reasons: [
        {
          emailValue: 'Cotizacion',
          translatedValue: this.$t('contact.form.reasons.cotizacion'),
        },
        {
          emailValue: 'Reclamo',
          translatedValue: this.$t('contact.form.reasons.reclamo'),
        },
        {
          emailValue: 'Otro',
          translatedValue: this.$t('contact.form.reasons.otro'),
        },
      ],
    }
  },
  head() {
    return {
      title: this.$t('content.contact.title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t('content.contact.metaDesrciption'),
        },
      ],
    }
  },
  computed: {
    showResult() {
      return !this.isSubmiting && this.sent
    },
  },
  created() {
    this.$recaptcha.language = this.$root.$i18n.locale
    this.$root.$on('language-changed', this.languageChanged)
  },
  methods: {
    languageChanged(code) {
      this.$recaptcha.language = code
    },
    async submit() {
      this.isSubmiting = true
      const isValid = await this.$refs.obs.validate()
      if (isValid) {
        const data = {
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_UID,
          template_params: {
            completeName: this.completeName,
            phone: this.phone,
            email: this.email,
            reason: this.reason,
            message: this.message,
            language: this.$root.$i18n.locale,
          },
        }
        try {
          const response = await this.$axios.$post(
            process.env.EMAILJS_API_SEND,
            data
          )
          if (response === 'OK') {
            this.error = false
          } else {
            this.error = true
          }
        } catch {
          this.error = true
        }
        this.sent = true
        this.isSubmiting = false
      }
      else{
        this.isSubmiting = false
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
