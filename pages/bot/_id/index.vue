<template>
  <div>
    <div v-if="bot">
      <v-row>
        <v-col cols="12" sm="12" class="avatar-area" md="6">
          <v-img max-width="300" :src="bot.avatar" />
        </v-col>
        <v-col cols="12" sm="12" md="6" class="info-area">
          <h1>{{ bot.tag }}</h1>
          <h3>{{ bot.brief }}</h3>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="11" md="10">
          <v-card>
            <!--eslint-disable-next-line vue/no-v-html-->
            <v-card-text v-html="description" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import gql from 'graphql-tag'
import markdownIt from 'markdown-it'
import 'highlight.js/styles/androidstudio.css'
import hljs from 'highlight.js'

const md = markdownIt({
  html: false,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<div style="display: block;overflow-x: auto;padding: 0.5em;background: #002b36;color: #839496;">${
          hljs.highlight(lang, str).value
        }</div>`
      } catch (e) {}
    }
  },
})

const query = gql`
  query($id: String!) {
    bot(id: $id) {
      id
      tag
      avatar
      brief
      description
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
      },
    })
    if (!data.data.bot)
      return ctx.error({
        statusCode: 404,
        message: '봇을 찾을 수 없습니다',
      })
    return {
      bot: data.data.bot,
      description: md.render(data.data.bot.description),
    }
  },
  head() {
    const bot = (this as any).bot

    return {
      title: bot.tag,
      meta: [
        { name: 'og:title', hid: 'og:title', content: bot.tag },
        {
          name: 'og:image',
          hid: 'og:image',
          content: bot.avatarURL,
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content: `봇 ${bot.tag}의 정보`,
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
