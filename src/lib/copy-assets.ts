import { basename, extname, resolve } from 'path'

import copy from 'copy'
import globby from 'globby'
import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'
import sharp from 'sharp'
import { difference } from 'lodash'

import { Post, out, root } from '..'

export default async (posts: Post[]) => {
  console.log('-', 'Copying public assets')

  await new Promise((yes, no) =>
    copy(`${root}/../public/**/*`, out, error => {
      if (error) {
        return no(error)
      }

      yes()
    })
  )

  const images = await globby(`${root}/**/*.{gif,jpg,png}`)

  const hero = images.filter(image => /hero/.test(image))
  const other = difference(images, hero)

  console.log('-', 'Copying hero images')

  await new Promise((yes, no) =>
    copy(`${root}/**/hero.{jpg,png}`, `${out}/img`, error => {
      if (error) {
        return no(error)
      }

      yes()
    })
  )

  console.log('-', 'Creating thumbnails')

  await Promise.all(
    hero.map(image => {
      const file = basename(image)
      const path = image
        .substr(root.length + 1)
        .replace(file, `thumb${extname(file)}`)

      return sharp(image)
        .resize(900)
        .toFile(resolve(out, 'img', path))
    })
  )

  console.log('-', 'Copying other images')

  await Promise.all(
    other.map(image =>
      sharp(image)
        .resize(1200)
        .toFile(resolve(out, 'img', image.substr(root.length + 1)))
    )
  )

  console.log('-', 'Compressing all images')

  await Promise.all(
    posts.map(({ slug }) =>
      // @ts-ignore
      imagemin([`${out}/img/${slug}/*.{jpg,png}`], {
        destination: `${out}/img/${slug}`,
        plugins: [imageminJpegtran(), imageminPngquant()]
      })
    )
  )
}
