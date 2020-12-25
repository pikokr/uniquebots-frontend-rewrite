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
      <v-col cols="12" sm="12">
        <v-row justify="center">
          <v-col cols="12" sm="10">
            <h2>제작한 봇</h2>
            <small>{{ user.tag }}님이 제작한 봇들 목록입니다.</small>
          </v-col>
          <v-col cols="12" sm="10">
            <v-row>
              <v-col
                v-for="bot in user.bots.result"
                :key="bot.id"
                cols="12"
                sm="12"
                md="6"
                lg="4"
                xl="2"
              >
                <v-card>
                  <v-list-item link :to="'/bot/' + bot.id" three-line>
                    <v-list-item-content>
                      <v-list-item-title class="headline mb-1">
                        {{ bot.tag }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ bot.brief }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-avatar rounded size="80">
                      <v-img :src="bot.avatar" />
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import gql from 'graphql-tag'

const query = gql`
  query($id: String!, $page: Int!) {
    user(id: $id) {
      id
      tag
      avatarURL
      badges {
        id
        icon
        name
      }
      bots(page: $page) {
        pages
        result {
          id
          tag
          avatar
          brief
        }
      }
    }
  }
`

export default {
  async asyncData(ctx: Context) {
    const client = ctx.app.apolloProvider.defaultClient
    const data = await client.query({
      query,
      variables: {
        id: ctx.route.params.id,
        page: 1,
      },
    })
    if (!data.data.user)
      return ctx.error({
        statusCode: 404,
        message: '유저를 찾을 수 없습니다',
      })
    return { bot: data.data.user }
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
