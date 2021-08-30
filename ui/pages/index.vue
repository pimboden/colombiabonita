<template>
  <v-container class="content home px-0 pt-0">
    <cb-carousel file="home.json" img-path="home"></cb-carousel>
    <cb-destinations-selection :items="allItems"/>
    <cb-youtube-video src="https://www.youtube.com/embed/xzy4umDtA88?autoplay=1&mute=1"/>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      allItems: [],
    }
  },
  head() {
    return {
      title: this.$t('content.home.title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t('content.home.metaDesrciption'),
        },
      ],
    }
  },
  mounted() {
    this.allItems =[
      {
        path: 'destinations-finca',
        finca: 'covenas',
      },{
        path: 'destinations-finca',
        finca: 'pradolu',
      },{
        path: 'destinations-finca',
        finca: 'pradonat',
      },{
        path: 'destinations-finca',
        finca: 'stamarta',
      },
    ]
  },
}
</script>
