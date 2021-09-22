<template>
  <v-row class="body-text">
    <v-col cols="12" class="mx-auto">
      <div class="text-body-1"><rich-text-renderer v-if="blok.text" :document="blok.text" /></div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbBodyText',
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
