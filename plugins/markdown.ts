import hljs from 'highlight.js'
import markdownIt from 'markdown-it'

const md = markdownIt('default', {
  html: false,
  highlight: (str, lang) => {
    let result = ''
    if (lang && hljs.getLanguage(lang)) {
      try {
        result = `<div style="display: block;overflow-x: auto;padding: 0.5em;background: #002b36;color: #839496;">${
          hljs.highlight(lang, str).value
        }</div>`
      } catch (e) {}
    }
    return result
  },
})

export default md
