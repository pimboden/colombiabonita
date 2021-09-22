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
              class="nav-menu"
            >
              <template #activator="{ on, attrs }">
                <div class="nav-menu-item">
                  <v-btn text v-bind="attrs" :class="isInCurrentPath(navItem.to) ? 'v-btn--active':''" v-on="on">
                    {{ $t(navItem.textKey) }}
                  </v-btn>
                  <nav-spacer />
                </div>
              </template>
              <v-list dense class="nav-menu-list">
                <v-list-item
                  v-for="(childItem, n) in navItem.childs"
                  :key="childItem.textKey"
                  router
                  :to="localePath(childItem.to)"
                  class="nav-menu-child"
                >
                  <v-list-item-action>
                    <v-list-item-title
                      >{{ $t(childItem.textKey) }}
                    </v-list-item-title>
                  </v-list-item-action>
                  <div v-if="n < navItem.childs.length -1" class="child-spacer"/>
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
        to: '/',
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
        childs: [
          {
            textKey: 'navitems.linkDestinationpradolu',
            to: {
              name: 'destinations-slug',
              params: { slug: 'pradolu' },
            },
          },
          {
            textKey: 'navitems.linkDestinationpradonat',
            to: {
              name: 'destinations-slug',
              params: { slug: 'pradonat' },
            },
          },
          {
            textKey: 'navitems.linkDestinationcove',
            to: {
              name: 'destinations-slug',
              params: { slug: 'covenas' },
            },
          },
          {
            textKey: 'navitems.linkDestinationstamarta',
            to: {
              name: 'destinations-slug',
              params: { slug: 'stamarta' },
            },
          },
        ],
      },
      {
        textKey: 'navitems.link4',
        to: 'gallery',
        childs: [
          {
            textKey: 'navitems.linkGallerypradolu',
            to: {
              name: 'galleries-slug',
              params: { slug: 'pradolu' },
            },
          },
          {
            textKey: 'navitems.linkGallerypradonat',
            to: {
              name: 'galleries-slug',
              params: { slug: 'pradonat' },
            },
          },
          {
            textKey: 'navitems.linkGallerycove',
            to: {
              name: 'galleries-slug',
              params: { slug: 'covenas' },
            },
          },
          {
            textKey: 'navitems.linkGallerystamarta',
            to: {
              name: 'galleries-slug',
              params: { slug: 'stamarta' },
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
  methods:{
     isInCurrentPath( path) {
      const res = this.$router.currentRoute.name.startsWith(path+='-')
      return res
    }
  }
}
</script>
