<template>
  <div>
    <v-list class="fill-height" dense>
      <v-list-item v-if="$store.state.bot">
        <v-list-item-avatar>
          <v-img :src="$store.state.bot.avatarURL" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ $store.state.bot.tag }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <div v-if="!$store.state.bot">
        <v-list-item link :href="$store.state.login">
          <v-list-item-icon>
            <v-icon>mdi-lock</v-icon>
          </v-list-item-icon>
          <v-list-item-title>로그인</v-list-item-title>
        </v-list-item>
      </div>
      <div v-else>
        <v-list-item link :to="`/user/${$store.state.bot.id}`">
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
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>홈</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'DrawerUserMenuPart',
}
</script>
