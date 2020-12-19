<template>
  <div>
    <v-row v-if="user">
      <v-col cols="12" sm="12" class="avatar-area" md="6">
        <v-img max-width="300" :src="user.avatarURL" />
      </v-col>
      <v-col cols="12" sm="12" md="6" class="info-area">
        <h1>{{ user.tag }}</h1>
        <div>
          <v-tooltip v-for="badge in user.badges" :key="badge.id" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" icon style="margin-right: 5px" v-on="on">
                <v-icon>mdi-{{ badge.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ badge.name }}</span>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import gql from 'graphql-tag'

export default {
  async asyncData(ctx: Context) {
    const client = ctx.app.apolloProvider.defaultClient
    const data = await client.query({
      query: gql`
        query($id: String!) {
          user(id: $id) {
            id
            tag
            avatarURL
            badges {
              id
              icon
              name
            }
          }
        }
      `,
      variables: {
        id: ctx.route.params.id,
      },
    })
    if (!data.data.user)
      return ctx.error({
        statusCode: 404,
        message: '유저를 찾을 수 없습니다',
      })
    return { user: data.data.user }
  },
  head() {
    const user = (this as any).user

    return {
      title: user.tag,
      meta: [
        { name: 'og:title', hid: 'og:title', content: user.tag },
        {
          name: 'og:image',
          hid: 'og:image',
          content: user.avatarURL,
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content: `${user.tag}님의 프로필`,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.avatar-area {
  display: flex;
  @media (min-width: 960px) {
    justify-content: flex-end;
  }
  @media (max-width: 959px) {
    justify-content: center;
  }
}
.info-area {
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    text-align: left;
  }
  @media (max-width: 959px) {
    text-align: center;
  }
}
</style>
