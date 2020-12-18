<template>
  <div>
    <v-list class="fill-height">
      <v-list-item v-if="$store.state.user">
        <v-list-item-avatar>
          <v-img :src="$store.state.user.avatarURL" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ $store.state.user.tag }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav dense>
        <div v-if="!$store.state.user">
          <v-list-item link :href="$store.state.login">
            <v-list-item-icon>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item link :to="`/user/${$store.state.user.id}`">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>프로필</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/logout">
            <v-list-item-icon>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'DrawerUserMenuPart',
}
</script>
