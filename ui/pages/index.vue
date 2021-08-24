<template>
  <v-container class="content home px-0 pt-0">
    <cb-carousel file="home.json" img-path="home"></cb-carousel>
    <cb-destinations-selection :items="allItems" />
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
    this.allItems = [
      {
        src: '/assets/icons/covenasSelector.png',
        alt: 'destSelectorComp.covenasAlt',
        caption: 'destSelectorComp.covenasCaption',
        path: 'destinations',
        finca: 'covenas',
      },
      {
        src: '/assets/icons/pradoSelector.png',
        alt: 'destSelectorComp.pradoAlt',
        caption: 'destSelectorComp.pradoCaption',
        path: 'destinations',
        finca: 'prado',
      },
      {
        src: '/assets/icons/stamartaSelector.png',
        alt: 'destSelectorComp.stamartaAlt',
        caption: 'destSelectorComp.stamartaCaption',
        path: 'destinations',
        finca: 'stamarta',
      },
    ]
  },
}
</script>
