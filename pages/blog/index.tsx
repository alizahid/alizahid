import { NextPage } from 'next'
import React from 'react'

import { Page, Post } from '../../components'
import blog from '../../data/blog.json'

const Blog: NextPage = () => (
  <Page
    className="flex flex-col lg:flex-row lg:flex-wrap lg:-mx-8"
    description="My words"
    title="Blog">
    {blog.map((post) => (
      <Post
        date={post.date}
        key={post.slug}
        slug={post.slug}
        title={post.title}>
        <p>{post.excerpt}</p>
      </Post>
    ))}
  </Page>
)

export default Blog
