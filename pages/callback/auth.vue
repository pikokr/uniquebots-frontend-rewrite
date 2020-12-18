<template>
  <div>로그인 처리중</div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import { Context } from '@nuxt/types'

export default {
  async asyncData(ctx: Context) {
    const data = await ctx.app.apolloProvider.defaultClient.mutate({
      mutation: gql`
        mutation($code: String!) {
          login(code: $code)
        }
      `,
      variables: {
        code: ctx.query.code,
      },
    })
    if (data.data.login) {
      ctx.app.$cookies.set('_token', data.data.login)
    }
    ctx.redirect('/')
  },
}
</script>
