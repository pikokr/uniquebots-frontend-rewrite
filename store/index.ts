import { ActionTree } from 'vuex'
import { Context } from '@nuxt/types'
import gql from 'graphql-tag'

export const state = () => ({
  user: null,
  login:
    'https://discord.com/api/oauth2/authorize?client_id=785407404031868949&redirect_uri=http%3A%2F%2Ftest.pikodev.me%3A3000%2Fcallback%2Fauth&response_type=code&scope=identify',
})

export const actions: ActionTree<any, any> = {
  async nuxtServerInit(_, ctx: Context) {
    const client = ctx.app.apolloProvider.defaultClient
    console.log(
      await client
        .query({
          query: gql`
            query {
              me {
                id
              }
            }
          `,
        })
        .then((e) => e.data.me)
    )
  },
}
