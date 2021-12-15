<template>
  <v-row class="page-title">
    <v-col cols="12" class="mx-auto">
      <h1 class="my-0 my-md-10">{{ blok.title }}</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbPageTitle',
    props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
