import { NextPage } from 'next'
import Head from 'next/head'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { RichText } from 'prismic-reactjs'
import React from 'react'

import { Footer, Header } from '../components'
import { content } from '../lib'
import { Course } from '../types'

interface Props {
  courses: Course[]
}

const Learning: NextPage<Props> = ({ courses }) => {
  return (
    <>
      <Head>
        <title>Learning / Ali Zahid</title>
        <meta content="My courses" name="description" />
      </Head>

      <Header />

      <main>
        <h1 className="text-5xl font-semibold">Learning</h1>
        {courses.map(({ chapters, description, name }, index) => (
          <article className="my-12" key={index}>
            <h2 className="text-3xl font-semibold">{name}</h2>
            <RichText render={description} />
            <h3 className="text-xl font-semibold mt-4">Chapters</h3>
            {chapters.map(({ details, title, video }, index) => (
              <a
                className="flex flex-col lg:flex-row lg:items-center my-4"
                href={video.link}
                key={index}
                rel="noopener noreferrer"
                target="_blank">
                <figure>
                  <img
                    alt={title}
                    className="w-full lg:w-32 lg:h-24 rounded"
                    src={video.image}
                  />
                </figure>
                <section className="text-black mt-4 lg:mt-0 lg:ml-4">
                  <h4 className="text-primary text-lg font-medium">{title}</h4>
                  <RichText render={details} />
                </section>
              </a>
            ))}
          </article>
        ))}
        {courses.length === 0 && (
          <div>
            <p>Nothing here right now. Please check back later.</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

Learning.getInitialProps = async () => {
  const courses = await content.courses()

  return {
    courses
  }
}

export default Learning
