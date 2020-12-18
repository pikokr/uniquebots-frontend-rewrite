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
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.link"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        name: '홈',
        link: '/',
        icon: 'mdi-home',
      },
    ],
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
