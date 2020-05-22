import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { content } from '../lib'
import { Product } from '../types'

interface Props {
  products: Product[]
}

const Sale: NextPage<Props> = ({ products }) => (
  <>
    <Head>
      <title>COVID-19 garage sale / Ali Zahid</title>
      <meta content="COVID-19 garage sale" name="description" />
    </Head>

    <main>
      <h1 className="text-5xl font-semibold">COVID-19 garage sale</h1>
      <p>
        I lost my job and my lease has ended so I&apos;m selling my stuff at
        crazy prices so I don&apos;t have to put it in storage.
      </p>
      <p>
        The main items are listed below. Other than these, I have a bunch of
        stuff like cutlery, plates, glasses, and wall shelves.
      </p>
      <p>
        I live in{' '}
        <a
          href="https://goo.gl/maps/1qtdLgK8mzXosV759"
          rel="noreferrer"
          target="_blank">
          Marina, Dubai, UAE
        </a>
        . You&apos;ll have to pick up stuff yourself. You can reach out to me on{' '}
        <a
          href={`https://wa.me/971559651960?text=${encodeURIComponent(
            "I'm interested in your COVID-19 garage sale."
          )}`}
          rel="noreferrer"
          target="_blank">
          WhatsApp
        </a>
        .
      </p>
      <section className="flex flex-wrap -mx-4">
        {products.map((product, index) => (
          <article
            className={`w-product relative rounded shadow m-4 p-4 ${
              product.available ? '' : 'opacity-25'
            }`}
            key={index}>
            <h2 className="font-medium text-3xl leading-tight">
              {product.name}
            </h2>
            <div className="text-xl font-medium mt-2">
              AED{' '}
              <span className="line-through text-red-500">
                {product.originalPrice}
              </span>{' '}
              <span className="text-green-500">{product.price}</span>
            </div>
            <a className="block my-4 w-full" href={product.image}>
              <img src={product.image} />
            </a>
            <div>
              {product.quantity} &#215; {product.description}
            </div>
            <div
              className={`font-medium my-4 rounded leading-none p-2 ${
                product.condition === 'Excellent'
                  ? 'bg-green-300'
                  : product.condition === 'Decent'
                  ? 'bg-blue-300'
                  : product.condition === 'Fair'
                  ? 'bg-orange-300'
                  : 'bg-red-300'
              }`}>
              {product.condition} condition
            </div>
            <a href={product.link} rel="noreferrer" target="_blank">
              Link
            </a>
          </article>
        ))}
      </section>
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await content.products()

  return {
    props: {
      products
    }
  }
}

export default Sale
