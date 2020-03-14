import { NextApiRequest, NextApiResponse } from 'next'

import { content } from '../../lib'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await content.posts()

  res.send({
    posts
  })
}
