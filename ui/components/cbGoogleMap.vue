<template>
  <v-row class="geoMap">
    <v-col cols="12" class="pt-0">
    <GMap
      ref="gMap"
      language="en"
      :center="{ lat: Number(blok.lat), lng: Number(blok.lng) }"
      :options="{ fullscreenControl: false, mapTypeId: 'hybrid'}"
      
      :zoom="15"
    >
      <GMapMarker
        :position="{ lat: Number(blok.lat), lng: Number(blok.lng) }"
        @click="currentgeoLocation = geoLocation"
      >
        <GMapInfoWindow  :options="{maxWidth: 350}">
          <div class="map-info-window">
          <div class="img"><img :src="blok.geoLocationImg.filename" :alt="blok.geoLocationImg.alt"></div>
          <div class="name">{{blok.fincaName}}</div>
          <div class="address">{{blok.fincaAddress}}</div>
          <div class="gmap"><a :href="blok.gmapUrl.url" target="_blank>">{{blok.gmapUrlText}}</a></div>
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
    blok: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

      currentgeoLocation: {},
    }
  }
}
</script>

<style></style>
