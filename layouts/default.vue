<template>
  <v-app dark>
    <Header />
    <Nuxt />
  </v-app>
</template>

<script>
import Header from '../components/Header'
export default {
  components: { Header },
  mounted() {
    const theme = localStorage.getItem('light')
    this.$vuetify.theme.dark = !theme
  },
}
</script>
