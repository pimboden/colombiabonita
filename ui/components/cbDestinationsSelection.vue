<template>
  <v-row v-if="items.length > 0" justify="center"  no-gutters class="destination-selector">
    <v-col v-for="item in items" :key="item.src" cols="7" sm= "3" class="py-4 px-1">
        <v-card
          class="pa-0 selector"
          elevation="0"
          >
          <nuxt-link
            :to="localePath({ name: item.path})+'/'+ item.finca"
          >
            <img
              :src="item.src"
              :alt="$t(item.alt)"
             />
              <figcaption>{{$t(item.caption)}}</figcaption></nuxt-link
        ></v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbDestinationsSelection',
  props: {
    items: {
      type: Array,
      default: ()=> [],
    },
  },
}
</script>
