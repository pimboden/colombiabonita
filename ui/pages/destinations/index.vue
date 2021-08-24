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
        src: '/assets/icons/coveñasSelector.png',
        alt: 'destSelectorComp.coveñasAlt',
        caption: 'destSelectorComp.coveñasCaption',
        path: 'destinations',
        finca: 'coveñas',
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
