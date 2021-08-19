<template>
        <v-row justify="end" class="lang-changer">
            <v-col cols="4" v-for=" lang in langs" :key="lang.key">
              <div :class="{ active: lang.code === $i18n.locale }" class="lang-div"
               @click="changeLanguage(lang.code)"><img :src="lang.icon" :alt="$t(lang.altkey)" /><span class="lang-changer-text">{{$t(lang.key)}}</span></div>
            </v-col>
          </v-row>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
   name: 'LanguageChanger',
   setup(_props, context) {
     const  langs = ref([
        {
          code: 'es',
          icon:'/assets/icons/es.png',
          altkey: 'langchangerComp.es_alt',
          key: 'langchangerComp.lang_es'

        },
        {
          code: 'en',
          icon:'/assets/icons/en.png',
          altkey: 'langchangerComp.en_alt',
          key: 'langchangerComp.lang_en'
        },
        {
          code: 'de',
          icon:'/assets/icons/de.png',
          altkey: 'langchangerComp.de_alt',
          key: 'langchangerComp.lang_de'
        }
      ])
     const changeLanguage = (code) => {
      context.root.$i18n.setLocale(code)
      context.root.$axios.defaults.headers.common['Accept-Language'] = code
      document.querySelector('html').setAttribute('lang', code)
      context.emit('language-changed')
      context.root.$router.push(context.root.switchLocalePath(code))
    }
    return {
      changeLanguage,
      langs
    }
   }
})
</script>
