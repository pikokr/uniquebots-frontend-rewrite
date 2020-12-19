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
        name: '유저 관리',
        link: '/admin/users',
        icon: 'mdi-account',
      },
      {
        name: '봇 관리',
        link: '/admin/bots',
        icon: 'mdi-robot',
      },
      {
        name: '심사 관리',
        link: '/admin/judges',
        icon: 'mdi-gavel',
      },
      {
        name: '감사 로그 보기',
        link: '/admin/audits',
        icon: 'mdi-format-list-bulleted',
      },
    ],
  }),
}
</script>
