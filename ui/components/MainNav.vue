<template>
  <div class="main-nav">
    <v-toolbar class="main-nav-toolbar" elevation="0">
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true">
      </v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down" style="position: relative">
        <div
          class="nav-item"
          v-for="(navItem, navItemIndex) in navItems"
          :key="navItem.textKey"
        >
          <template v-if="navItem.childs.length == 0">
            <v-btn text :to="localePath(navItem.to)" exact>
              {{ $t(navItem.textKey) }}
            </v-btn>
            <nav-spacer v-if="navItemIndex < navItems.length - 1" />
          </template>
          <template v-else>
            <v-menu
              open-on-hover
              offset-y
              transition="slide-x-transition"
              bottom
              right
            >
              <template #activator="{ on, attrs }">
                <div class="nav-item">
                  <v-btn text v-bind="attrs" v-on="on">
                    {{ $t(navItem.textKey) }}
                  </v-btn>
                  <nav-spacer />
                </div>
              </template>
              <v-list dense>
                <v-list-item
                  v-for="childItem in navItem.childs"
                  :key="childItem.textKey"
                  router
                  :to="localePath(childItem.to)"
                >
                  <v-list-item-action>
                    <v-list-item-title
                      >{{ $t(childItem.textKey) }}
                    </v-list-item-title>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app  class="hidden-md-and-up">
      <v-list>
        <template v-for="navItem in navItems">
          <template v-if="navItem.childs.length > 0">
            <v-subheader :key="navItem.textKey" class="subheader">
              {{ $t(navItem.textKey) }}
            </v-subheader>
            <v-list-item
              v-for="(childItem, childIndex) in navItem.childs"
              :key="childItem.textKey + '_drawer_' +childIndex.toString()" 
              :to="localePath(childItem.to)"
              router
              exact
            >
              <v-list-item-content class="child-item">
                <v-list-item-title v-text="$t(childItem.textKey)" />
              </v-list-item-content>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-item :key="navItem.textKey" :to="localePath(navItem.to)" router exact>
              <v-list-item-content>
                <v-list-item-title v-text="$t(navItem.textKey)" />
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name:'MainNav',
  data: () => ({
    navItems: [],
    drawer: false,
  }),
  mounted() {
    this.navItems = [
      {
        textKey: 'navitems.link1',
        to: 'index',
        childs: [],
      },
      {
        textKey: 'navitems.link2',
        to: 'aboutus',
        childs: [],
      },
      {
        textKey: 'navitems.link3',
        to: 'destinations',
        childs: [],
      },
      {
        textKey: 'navitems.link4',
        to: null,
        childs: [
          {
            textKey: 'navitems.linkGalleryPrado',
            to: {
              name: 'gallery-finca',
              params: { finca: 'prado' },
            },
          },
          {
            textKey: 'navitems.linkGalleryCove',
            to: {
              name: 'gallery-finca',
              params: { finca: 'covenas' },
            },
          },
          {
            textKey: 'navitems.linkGalleryStaMarta',
            to: {
              name: 'gallery-finca',
              params: { finca: 'stamarta' },
            },
          },
        ],
      },
      {
        textKey: 'navitems.link5',
        to: null,
        childs: [
          {
            textKey: 'navitems.linkPricePrado',
            to: {
              name: 'price-finca',
              params: { finca: 'prado' },
            },
          },
          {
            textKey: 'navitems.linkPriceCove',
            to: {
              name: 'price-finca',
              params: { finca: 'covenas' },
            },
          },
          {
            textKey: 'navitems.linkPriceStaMarta',
            to: {
              name: 'price-finca',
              params: { finca: 'StaMarta' },
            },
          },
        ],
      },
      {
        textKey: 'navitems.link6',
        to: 'contact',
        childs: [],
      },
    ]
  },
}
</script>
