<template>
      <span>
        <icon-light
          v-if="$vuetify.theme.dark"
          @click="changeColor('light')"
        />
        <icon-dark
          v-else
          @click="changeColor('dark')"
        />
      </span>
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
    if(this.$vuetify.theme.dark){
     this.$colorMode.value ='dark'
     this.$colorMode.preference = 'dark'
    }
    else{
     this.$colorMode.value ='light'
     this.$colorMode.preference = 'light'
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