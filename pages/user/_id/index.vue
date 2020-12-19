<template>
  <div>{{ JSON.stringify(user) }}</div>
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
          }
        }
      `,
      variables: {
        id: ctx.route.params.id,
      },
    })
    return { user: data.data.user }
  },
}
</script>
