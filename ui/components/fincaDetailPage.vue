<template>
 <v-container class="content destination-detail px-0 pt-0">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component" />
  </v-container >
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: this.blok.pageTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.blok.pageDescription,
        },
      ],
    }
  }

}
</script>