import { resolve } from 'path'

import sass from 'node-sass'
import { writeFile } from 'fs-extra'

import { root, out } from '..'

export default () =>
  new Promise((yes, no) =>
    sass.render(
      {
        file: resolve(root, '..', 'src', 'styles', 'index.scss'),
        outputStyle: 'compressed'
      },
      async (error, result) => {
        if (error) {
          return no(error)
        }

        const { css } = result

        await writeFile(resolve(out, 'styles.css'), css)

        yes()
      }
    )
  )
