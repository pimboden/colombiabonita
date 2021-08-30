<template>
  <v-row v-if="items.length > 0" justify="center"  no-gutters class="destination-selector">
    <v-col v-for="item in items" :key="item.src" cols="7" sm= "3" class="py-4 px-1">
        <v-card
          class="pa-0 selector"
          elevation="0"
          >
          <nuxt-link
            :to="localePath( { name: item.path, params: { finca: item.finca }})">
            <img
              :src="'/assets/icons/selector-'+item.finca+'.png'"
              :alt="$t('destSelectorComp.'+item.finca+'Alt')"
             />
              <figcaption>{{$t('destSelectorComp.'+item.finca+'Caption')}}</figcaption></nuxt-link
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
