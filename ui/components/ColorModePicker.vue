<template>
      <div>
        <icon-light
          v-if="$vuetify.theme.dark"
          @click="changeColor('light')"
        />
        <icon-dark
          v-else
          @click="changeColor('dark')"
        />
      </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
export default {
  name:"ColorModePicker",
components: {
    IconLight,
    IconDark
  },
  mounted(){
    this.$vuetify.theme.dark = this.$colorMode.value ==='dark'
    const html  = document.getElementsByTagName("HTML")[0]
    if(this.$vuetify.theme.dark){
     this.$colorMode.value ='dark'
     this.$colorMode.preference = 'dark'
     html.classList.remove('light-mode')
     html.classList.add('dark-mode')
    }
    else{
     this.$colorMode.value ='light'
     this.$colorMode.preference = 'light'
     html.classList.remove('dark-mode')
     html.classList.add('light-mode')
    }
    
  },
  methods: {
    changeColor (color){
      this.$colorMode.preference = color
      this.$vuetify.theme.dark = this.$colorMode.preference ==='dark'
    },
  }
}
</script>

<style>

</style>