<template>
  <v-container class="content destinations px-0 pt-0">
    <cb-page-title translation-key="content.destinations.title" />

    <cb-destinations-selection :items="allItems" />
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
      },{
        src: '/assets/icons/pradoSelector.png',
        alt: 'destSelectorComp.pradoAlt',
        caption: 'destSelectorComp.pradoCaption',
        path: 'destinations',
        finca: 'prado',
      },{
        src: '/assets/icons/stamartaSelector.png',
        alt: 'destSelectorComp.stamartaAlt',
        caption: 'destSelectorComp.stamartaCaption',
        path: 'destinations',
        finca: 'stamarta',
      },
    ]
  },
  nuxtI18n: {
    paths: {
      es: '/destinos',
      en: '/destinations',
      de: '/zielorte',
    },
  },
}
</script>
