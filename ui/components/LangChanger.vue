<template>
  <v-row justify="end" class="lang-changer">
    <v-col cols="4" v-for="lang in langs" :key="lang.key">
      <div
        :class="{ active: lang.code === $i18n.locale }"
        class="lang-div"
        @click="changeLanguage(lang.code)"
      >
        <img :src="lang.icon" :alt="$t(lang.altkey)" /><span
          class="lang-changer-text"
          >{{ $t(lang.key) }}</span
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LanguageChanger',
  data() {
    return {
      langs: [
        {
          code: 'es',
          icon: '/assets/icons/es.png',
          altkey: 'langchangerComp.es_alt',
          key: 'langchangerComp.lang_es',
        },
        {
          code: 'en',
          icon: '/assets/icons/en.png',
          altkey: 'langchangerComp.en_alt',
          key: 'langchangerComp.lang_en',
        },
        {
          code: 'de',
          icon: '/assets/icons/de.png',
          altkey: 'langchangerComp.de_alt',
          key: 'langchangerComp.lang_de',
        },
      ],
    }
  },
  methods: {
    changeLanguage(code){
      this.$root.$i18n.setLocale(code)
      this.$root.$axios.defaults.headers.common['Accept-Language'] = code
      document.querySelector('html').setAttribute('lang', code)
      this.$root.$emit('language-changed', code)
      this.$root.$router.push(this.$root.switchLocalePath(code))
    }
  },
}
</script>
