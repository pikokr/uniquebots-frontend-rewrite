import { ActionTree } from 'vuex'
import { Context } from '@nuxt/types'
import gql from 'graphql-tag'

export const state = () => ({
  user: null,
})

export const actions: ActionTree<any, any> = {
  async nuxtServerInit(_, ctx: Context) {
    const client = ctx.app.apolloProvider.defaultClient
    console.log(
      await client.query({
        query: gql`
          query {
            me {
              id
            }
          }
        `,
      })
    )
  },
}
