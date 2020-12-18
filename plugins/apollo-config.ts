import { Context } from '@nuxt/types'
import { ApolloClientConfig } from '@nuxtjs/apollo/types/nuxt'

export default (ctx: Context): ApolloClientConfig & any => {
  return {
    httpEndpoint: 'http://test.pikodev.me:1234/graphql',
    getAuth() {
      if (ctx.app.$cookies.get('_token')) {
        return 'Bearer' + ctx.app.$cookies.get('_token')
      }
      return ''
    },
  }
}
