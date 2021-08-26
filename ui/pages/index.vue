<template>
  <v-container class="content home px-0 pt-0">
    <cb-carousel file="home.json" img-path="home"></cb-carousel>
    <cb-destinations-selection :items="allItems"/>
    <cb-youtube-video src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"/>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      allItems: [],
    }
  },
  mounted() {
    this.allItems =[
      {
        path: 'destinations',
        finca: 'covenas',
      },{
        path: 'destinations',
        finca: 'pradolu',
      },{
        path: 'destinations',
        finca: 'pradonat',
      },{
        path: 'destinations',
        finca: 'stamarta',
      },
    ]
  },
}
</script>
