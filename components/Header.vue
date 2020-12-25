<template>
  <div>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = true" />
      <v-toolbar-title>
        <nuxt-link to="/" style="text-decoration: unset; color: unset">
          Uniquebots
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-brightness-4</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="min-width: 300px"
    >
      <v-tabs vertical class="fill-height">
        <v-tab><v-icon>mdi-account</v-icon></v-tab>
        <v-tab v-if="$store.state.user && $store.state.user.admin"
          ><v-icon>mdi-view-dashboard</v-icon></v-tab
        >
        <v-tab-item>
          <DrawerUserMenuPart />
        </v-tab-item>
        <v-tab-item>
          <DefaultDrawer />
        </v-tab-item>
      </v-tabs>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DefaultDrawer from './AdminDrawer'
import DrawerUserMenuPart from './DrawerUserMenuPart'
export default {
  name: 'Header',
  components: { DrawerUserMenuPart, DefaultDrawer },
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    toggleTheme() {
      let theme

      if (localStorage.getItem('light')) {
        localStorage.removeItem('light')
        theme = false
      } else {
        localStorage.setItem('light', '1')
        theme = true
      }
      this.$vuetify.theme.dark = !theme
    },
  },
}
</script>
