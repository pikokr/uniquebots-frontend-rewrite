import MarkdownIt from 'markdown-it'

declare module 'vue/types/vue' {
  interface Vue {
    $md: MarkdownIt
  }
}
