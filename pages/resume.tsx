import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Resume: NextPage = () => (
  <>
    <Head>
      <title>Resume / Ali Zahid</title>
      <meta content="My resume" name="description" />
    </Head>

    <main className="flex items-center justify-center">
      <div className="bg-white flex flex-col shadow-sm rounded-lg overflow-hidden">
        <header className="flex flex-col lg:flex-row lg:justify-between m-8">
          <div>
            <h1 className="text-4xl font-semibold text-red-500">Ali Zahid</h1>
            <h2 className="text-2xl font-medium text-gray-600">
              Product Developer
            </h2>
          </div>
          <nav className="flex flex-col lg:items-end mt-4 lg:mt-0">
            <a className="text-gray-700" href="mailto:ali.zahid@live.com">
              ali.zahid@live.com
            </a>
            <a className="text-gray-700 mt-2" href="https://alizahid.dev">
              alizahid.dev
            </a>
            <a
              className="text-gray-700 mt-2 flex items-center"
              href="https://github.com/alizahid">
              <img className="h-6 w-6 mr-2" src="/social/github.svg" />
              alizahid
            </a>
            <a
              className="text-gray-700 mt-2 flex items-center"
              href="https://twitter.com/alizahid0">
              <img className="h-6 w-6 mr-2" src="/social/twitter.svg" />
              alizahid0
            </a>
            <a
              className="text-gray-700 mt-2 flex items-center"
              href="https://dribbble.com/alizahid">
              <img className="h-6 w-6 mr-2" src="/social/dribbble.svg" />
              alizahid
            </a>
          </nav>
        </header>
        <main className="my-8 mx-8">
          <section className="flex flex-col lg:flex-row">
            <h3 className="text-gray-500 font-medium text-xl lg:w-64">
              Experience
            </h3>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:ml-8">
              <div>
                <article className="mt-4 lg:mt-0">
                  <h4 className="font-medium text-lg flex items-center">
                    AYM
                    <span className="text-gray-600 text-base font-normal ml-2">
                      2017&mdash;2020
                    </span>
                  </h4>
                  <h5 className="text-xl font-medium text-gray-700">
                    Tech Lead
                  </h5>
                  <p className="mt-2 text-gray-800">
                    Built backend for Pampers loyalty program in Node using
                    Mongo and Azure Functions
                  </p>
                  <p className="mt-2 text-gray-800">
                    Built operations tech in React Native for Danube, the
                    largest chain of supermarkets in Saudi Arabia; led the tech
                    department
                  </p>
                </article>
                <article className="mt-4">
                  <h4 className="font-medium text-lg flex items-center">
                    Pixel Twist
                    <span className="text-gray-600 text-base font-normal ml-2">
                      2015&mdash;2016
                    </span>
                  </h4>
                  <h5 className="text-xl font-medium text-gray-700">
                    Head of Mobile
                  </h5>
                  <p className="mt-2 text-gray-800">
                    Built mobile and web products
                  </p>
                </article>
              </div>
              <div>
                <article className="mt-4 lg:mt-0">
                  <h4 className="font-medium text-lg flex items-center">
                    JadoPado
                    <span className="text-gray-600 text-base font-normal ml-2">
                      2016&mdash;2017
                    </span>
                  </h4>
                  <h5 className="text-xl font-medium text-gray-700">
                    Full Stack Engineer
                  </h5>
                  <p className="mt-2 text-gray-800">
                    Localised the ecommerce app to Arabic. Worked on improving
                    support for RTL layouts to React Native
                  </p>
                </article>
                <article className="mt-4">
                  <h4 className="font-medium text-lg flex items-center">
                    TallyMarks
                    <span className="text-gray-600 text-base font-normal ml-2">
                      2013&mdash;2015
                    </span>
                  </h4>
                  <h5 className="text-xl font-medium text-gray-700">
                    Head of Mobile
                  </h5>
                  <p className="mt-2 text-gray-800">
                    Built mobile products for large enterprises with SAP
                    Mobility
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section className="flex flex-col lg:flex-row mt-8">
            <h3 className="text-gray-500 font-medium text-xl w-64">Skills</h3>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:ml-8">
              <div>
                <article className="mt-4 lg:mt-0">
                  <h4 className="font-medium text-lg flex items-center">
                    Core
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Full stack development, product design, architecture,
                    TypeScript, JavaScript
                  </p>
                  <p className="mt-2 text-gray-800">
                    Mobile with React Native, data with GraphQL / REST, APIs
                    with Node, web with React / Ember
                  </p>
                </article>
                <article className="mt-4">
                  <h4 className="font-medium text-lg flex items-center">
                    Services
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Heroku, Render, AWS, Azure, Firebase, Sentry
                  </p>
                </article>
              </div>
              <div>
                <article className="mt-4 lg:mt-0">
                  <h4 className="font-medium text-lg flex items-center">
                    Front End
                  </h4>
                  <p className="mt-2 text-gray-800">
                    React, React Native, Ember
                  </p>
                </article>
                <article className="mt-4">
                  <h4 className="font-medium text-lg flex items-center">
                    Back End
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Built mobile products for large enterprises with SAP
                    Mobility
                  </p>
                </article>
                <article className="mt-4">
                  <h4 className="font-medium text-lg flex items-center">
                    Data
                  </h4>
                  <p className="mt-2 text-gray-800">
                    MongoDB, Postgres, Algolia, Braze, Segment, GraphQL, Prisma,
                    Apollo
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <svg viewBox="0 0 1440 320">
            <path
              d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#4FD1C5"
              fillOpacity="1"
            />
          </svg>
        </footer>
      </div>
    </main>
  </>
)

export default Resume
