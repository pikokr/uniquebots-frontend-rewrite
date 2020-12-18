import { ActionTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'
import gql from 'graphql-tag'

export const state = () => ({
  user: null,
  login:
    'https://discord.com/api/oauth2/authorize?client_id=785407404031868949&redirect_uri=http%3A%2F%2Ftest.pikodev.me%3A3000%2Fcallback%2Fauth&response_type=code&scope=identify',
})

export const mutations: MutationTree<any> = {
  user(state, payload) {
    state.user = payload
  },
}

export const actions: ActionTree<any, any> = {
  async nuxtServerInit({ commit }, ctx: Context) {
    const client = ctx.app.apolloProvider.defaultClient
    commit(
      'user',
      await client
        .query({
          query: gql`
            query {
              me {
                id
                avatarURL
                tag
              }
            }
          `,
        })
        .then((e) => e.data.me)
    )
  },
}
