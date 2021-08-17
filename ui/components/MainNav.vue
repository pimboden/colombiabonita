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
            <v-btn text :to="navItem.to" exact>
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
                  :to="childItem.to"
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
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <template v-for="navItem in navItems">
          <template v-if="navItem.childs.length > 0">
            <v-subheader :key="navItem.textKey" class="subheader">
              {{ $t(navItem.textKey) }}
            </v-subheader>
            <v-list-item
              v-for="(childItem, childIndex) in navItem.childs"
              :key="childItem.textKey + '_drawer_' +childIndex.toString()" 
              :to="childItem.to"
              router
              exact
            >
              <v-list-item-content class="child-item">
                <v-list-item-title v-text="$t(childItem.textKey)" />
              </v-list-item-content>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-item :key="navItem.textKey" :to="navItem.to" router exact>
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
  data: () => ({
    navItems: [],
    drawer: false,
  }),
  mounted() {
    this.navItems = [
      {
        textKey: 'navitems.link1',
        to: this.localePath('index'),
        childs: [],
      },
      {
        textKey: 'navitems.link2',
        to: this.localePath('aboutus'),
        childs: [],
      },
      {
        textKey: 'navitems.link3',
        to: this.localePath('destinations'),
        childs: [],
      },
      {
        textKey: 'navitems.link4',
        to: null,
        childs: [
          {
            textKey: 'navitems.linkGalleryPrado',
            to: this.localePath({
              name: 'gallery-finca',
              params: { finca: 'prado' },
            }),
          },
          {
            textKey: 'navitems.linkGalleryCove',
            to: this.localePath({
              name: 'gallery-finca',
              params: { finca: 'coveñas' },
            }),
          },
          {
            textKey: 'navitems.linkGalleryStaMarta',
            to: this.localePath({
              name: 'gallery-finca',
              params: { finca: 'StaMarta' },
            }),
          },
        ],
      },
      {
        textKey: 'navitems.link5',
        to: null,
        childs: [
          {
            textKey: 'navitems.linkPricePrado',
            to: this.localePath({
              name: 'price-finca',
              params: { finca: 'prado' },
            }),
          },
          {
            textKey: 'navitems.linkPriceCove',
            to: this.localePath({
              name: 'price-finca',
              params: { finca: 'coveñas' },
            }),
          },
          {
            textKey: 'navitems.linkPriceStaMarta',
            to: this.localePath({
              name: 'price-finca',
              params: { finca: 'StaMarta' },
            }),
          },
        ],
      },
      {
        textKey: 'navitems.link6',
        to: this.localePath('contact'),
        childs: [],
      },
    ]
  },
}
</script>
