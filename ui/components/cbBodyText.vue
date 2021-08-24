<template>
  <v-row class="body-text">
    <v-col cols="12" class="mx-auto">
      <div class="text-body-1" v-html="$t(translationKey)"></div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbBodyText',
  props: {
    translationKey: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
