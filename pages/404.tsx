import { NextPage } from 'next'
import React from 'react'

import { Page } from '../components'

const NotFound: NextPage = () => (
  <Page description="Not found" title="404">
    <h2 className="text-6xl font-semibold leading-tight mt-8">
      Looks like you&#39;re looking for something that doesn&#39;t exist.
    </h2>
    <p className="mt-4">Are you sure you got the right link?</p>
  </Page>
)

export default NotFound
