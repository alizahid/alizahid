import { get } from 'lodash'
import { renderToStaticMarkup } from 'react-dom/server'

import { Article, Home, Layout } from '../components'

const render = (template: string, props: any) => {
  switch (template) {
    case 'article':
      return Article(props)

    case 'home':
      return Home(props)
  }
}

export default (template: string, props: any) => {
  const element = render(template, props)

  const title = get(props, 'post.meta.title')

  const page = Layout({
    title,
    children: element
  })

  return renderToStaticMarkup(page)
}
