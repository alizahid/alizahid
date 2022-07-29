import highlighter from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import ruby from 'highlight.js/lib/languages/ruby'
import typescript from 'highlight.js/lib/languages/typescript'

highlighter.registerLanguage('bash', bash)
highlighter.registerLanguage('javascript', javascript)
highlighter.registerLanguage('json', json)
highlighter.registerLanguage('ruby', ruby)
highlighter.registerLanguage('typescript', typescript)

export const highlight = (selector = 'code'): void =>
  document
    .querySelectorAll<HTMLElement>(selector)
    .forEach((element) => highlighter.highlightElement(element))
