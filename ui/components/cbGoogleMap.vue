<template>
  <v-row class="carousel">
    <v-col v-if="geoLocation" cols="12" class="pt-0">
    <cb-spinner v-if="$fetchState.pending" />
    <GMap
      ref="gMap"
      language="en"
      :center="{ lat: geoLocation.lat, lng: geoLocation.lng }"
      :options="{ fullscreenControl: false, mapTypeId: 'hybrid'}"
      
      :zoom="15"
    >
      <GMapMarker
        :position="{ lat: geoLocation.lat, lng: geoLocation.lng }"
        @click="currentgeoLocation = geoLocation"
      >
        <GMapInfoWindow  :options="{maxWidth: 350}">
          <div class="map-info-window">
          <div class="img"><img :src="geoLocationImg" :alt="$t('content.destinations.'+finca+'.geoLocation.alt')"></div>
          <div class="name">{{$t('content.destinations.'+finca+'.geoLocation.name')}}</div>
          <div class="address">{{$t('content.destinations.'+finca+'.geoLocation.address')}}</div>
          <div class="gmap"><a :href="geoLocation.gmapUrl" target="_blank>">{{$t('content.destinations.gmapUrlText')}}</a></div>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CbGoogleMap',
  props: {
    file: {
      type: String,
      default: '',
    } /* name of the json file undes /static/maps */,
    finca: {
      type: String,
      default: '',
    } /* name of the finca */,
  },
  data() {
    return {
      geoLocation: null,
      geoLocationImg :'',
      currentgeoLocation: {},
    }
  },

  async fetch() {
    const jsonFilePath = process.env.HOST_NAME+'/assets/maps/' + this.file
    await this.loadGeoLocation(jsonFilePath)
  },
  methods: {
    async loadGeoLocation(jsonFilePath) {
      this.geoLocation = await this.$axios.$get(jsonFilePath)
      this.geoLocationImg = process.env.HOST_NAME+'/assets/maps/'+this.finca+'.png'
    },
  },
}
</script>

<style></style>
