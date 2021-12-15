<template>
  <v-row v-if="blok.items.length > 0" justify="center"  no-gutters class="destination-selector mt-6">
    <v-col v-for="item in blok.items" :key="item.src" cols="7" sm= "3" class="py-4 px-2 mr-auto"
    >
        <v-card         
          class="selector"
          elevation="0"
          >
          <nuxt-link
            :to="localePath( { name: 'destinations-slug', params: { slug: item.finca }})">
            <img
              :src="item.image.filename"
              :alt="item.image.alt"
             />
              <figcaption>{{item.caption}}</figcaption></nuxt-link
        ></v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbDestinationsSelection',
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
