<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  asyncData(ctx: Context) {
    ctx.app.$cookies.remove('_token')
    ctx.store.commit('user', null)
    ctx.redirect('/')
  },
}
</script>
