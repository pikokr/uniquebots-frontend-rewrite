<template>
  <v-list class="grow">
    <v-list nav dense>
      <v-list-item v-for="item in items" :key="item.link" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-list>
</template>

<script>
export default {
  name: 'DefaultDrawer',
  data: () => ({
    items: [
      {
        name: '홈',
        link: '/',
        icon: 'mdi-home',
      },
    ],
  }),
}
</script>
