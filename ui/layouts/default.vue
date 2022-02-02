<template>
  <v-app>
    <v-container class="header-container">
      <v-row>
        <v-col
          cols="8"
          ><main-logo :alt="blok.logo_alt"
        /></v-col>
        <v-col cols="4" class="colormode-wrapper">
              <color-mode-picker />
              <main-nav class="small hidden-md-and-up"/>  
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="mx-0 px-0 hidden-sm-and-down">
      <v-row>
        <v-col cols="12" class="pa-0 outer-col">
            <main-nav />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="pb-16">
        <v-col cols="12" class="main-content-wrapper">
          <v-main class="pl-0">
            <nuxt />
          </v-main>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-container>
    <cb-footer :left-footer-title="blok.left_footer_title" 
    :right-footer-title="blok.right_footer_title"
    :fb-link="blok.facebook_link"
    :yt-link="blok.youtube_link"
    :ins-link="blok.instagram_link"
    :phone="blok.phone"
    :contact-form-link-title="blok.contact_form_link_title"/>
  </v-app>
</template>

<script>
import StoryblokClient from 'storyblok-js-client'
export default {
  data() {
    return {
      blok: {},
    }
  },
  mounted() {
    this.loadData()
    this.$root.$on('language-changed', this.loadData)
  },
  methods:{
    
    loadData(){
    const version = this.$route.query._storyblok ? 'draft' : 'published'

    // slug layout
    // Load the JSON from the API - loadig the home content (index page)
    const Storyblok = new StoryblokClient({
      accessToken: process.env.STORYBLOCK_API_KEY,
      cache: {
        clear: 'auto',
        type: 'memory',
      },
    })
    Storyblok.get(`cdn/stories/_layoutsettings`, {
      version,
      language: this.$i18n.locale,
    })
      .then((res) => {
        console.log(res.data)
        this.blok = res.data.story.content
      })
      .catch((res) => {
        if (!res.response) {
          console.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })

    document.querySelector('html').setAttribute('lang', this.$i18n.locale)
  }
  }
}
</script>
