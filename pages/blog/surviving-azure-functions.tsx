import { NextPage } from 'next'
import React from 'react'

import { Link, Page, PostHeader } from '../../components'

const Post: NextPage = () => (
  <Page
    description="My year with Azure Functions and how I survived."
    subtitle="Surviving Azure Functions"
    title="Blog">
    <PostHeader
      date="2019-07-03"
      slug="surviving-azure-functions"
      title="Surviving Azure Functions"
    />

    <div className="post">
      <p>
        Over the last year, I&#39;ve worked a lot with Azure Functions. A new
        client at my work insisted that we use Azure and our CTO chose Azure
        Functions.
      </p>
      <p>
        It was a controversial decision; I didn&#39;t agree with it. The scope
        of the app required a proper Node app instead of serverless. However,
        based on the client&#39;s previous experience with their monolithic Java
        app, they wanted to use microservices. Which is fair, but the use of
        Azure Functions as microservices for a stateful app isn&#39;t.
      </p>
      <p>
        Fortunately (?), you can build a stateful app with Azure Functions. The
        way Azure Functions apps are architected is different from AWS Lambda or
        Google Cloud Functions. You create and run an app which contains
        multiple functions, which can share code, state, and database instances.
        You can toggle individual functions on and off. Azure offers a lot of
        bindings and triggers for its different services such as Blob Storage,
        ServiceBus queue, CosmosDB, and{' '}
        <Link
          external
          href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings">
          many more
        </Link>
        .
      </p>
      <p>
        When I first started building with Azure Functions, the stable runtime
        version was v1. Which only supported Node v6. I didn&#39;t want to play
        around with that, so I opted into their v2 beta, which supported Node v8
        and came with many core improvements. It wasn&#39;t production ready,
        but they agreed to support our client, and we went ahead with it.
      </p>
      <p>
        It&#39;s been a year of challenges and discoveries and learnings. Today,
        I&#39;ll share some of them with you. Including a TypeScript starter,
        which I wrote to help you get started with Azure Functions.
      </p>

      <h3>How do Azure Functions work</h3>
      <ul>
        <li>You create an app</li>
        <li>You create functions inside the app</li>
        <li>Functions can share state and code</li>
        <li>You bundle all your code into one file</li>
        <li>
          <code>function.json</code> define entry points for functions to your
          CommonJS modules exported from the bundle
        </li>
        <li>Azure Functions runtime executes the function requested</li>
      </ul>

      <h3>Challenges</h3>
      <h4>Plans</h4>
      <p>There are two types of plans for Azure Functions.</p>
      <ul>
        <li>Consumption &#8212; you pay by execution</li>
        <li>
          App service &#8212; you provision servers, which come in all shapes,
          sizes, and cost, and run your app on them
        </li>
      </ul>
      <p>
        On the consumption plan, the function app goes to sleep after 5 minutes
        of inactivity. There&#39;s no way to change this setting.
      </p>
      <p>
        You can, however, switch to an App Service Plan. By default, function
        app doesn&#39;t go to sleep. It also increases the function execution
        time from 5 minutes to 30, which can be increased by configuration.
      </p>
      <p>
        The app service plan was necessary for us because of our traffic.
        However, if you&#39;re using functions right, you should be okay with
        the consumption plan.
      </p>
      <h4>Stability</h4>
      <p>
        When I started writing the functions, Azure Function runtime v2 was
        somewhat unstable. It had some weird bugs which broke our code with
        every update. When we went to production, we had to lock our runtime
        version to the last known working and tested release. Every time we
        wanted to update, we had to regression test everything. Luckily, we had
        99% code coverage, and we&#39;d find out instantly if something broke.
      </p>
      <p>
        However, it&#39;s been months since v2 went to production and is now the
        default version for all Azure Function apps. It&#39;s fast and stable.
      </p>
      <h4>Pipeline</h4>
      <p>
        Our structure is a bit complex. We deploy our functions to multiple
        production apps for different markets and control the behavior with
        configuration.
      </p>
      <p>
        So, we had to use VSTS (now called Azure DevOps) for build and release
        pipelines. The build pipeline builds with <code>yarn build</code> which
        bundles our code with Webpack, creates an artifact, and uploads it to
        the internal Azure repo. The release pipeline has many targets for
        different staging, test, and production environments — each with its own
        set of environment variables.
      </p>
      <p>
        That&#39;s a decent CI and CD setup but took a fair bit of time and
        effort to reach maturity. It would be nice to have temporary apps for
        pull requests like Heroku does, but we manage.
      </p>
      <h4>Application Insights</h4>
      <p>
        AppInsights is the Azure APM offering, which we have integrated with our
        functions. It has some cool things, especially around reporting and
        viewing requests, dependencies, and exceptions. However, integration is
        very lacking and often broken. Out of the box, the tracking offers no
        useful information. Dependencies and exceptions are not part of
        requests, which makes it difficult to see what happened in a request and
        what took longer than it should have and what needs fixing.
      </p>
      <p>
        We found an undocumented way of connecting everything, but that broke
        sometime last year and never received a fix.
      </p>
      <p>
        AppInsights is one of our most significant pain points at the moment.
      </p>
      <h4>Node support</h4>
      <p>
        The latest Azure Function runtime only supports LTS versions of Node,
        which is v10 right now. Locally, I use the latest version of Node, which
        is v12. Which means I can&#39;t run functions on my machine during
        development unless I use NVM or downgrade my version of Node. I&#39;m
        not a fan of either — only the latest and greatest for me. 🤓
      </p>
      <p>
        I&#39;ll talk about how to fix this a little further down this post.
      </p>

      <h3>Learnings and discoveries</h3>
      <p>
        I&#39;ve taken a year&#39;s worth of learnings and put them into a
        package called <Link href="https://github.com/alizahid/tote">Tote</Link>
        .
      </p>
      <p>
        I think Tote is an excellent starter for Azure Functions. It uses Docker
        Compose so you can have any version of Node running locally and still be
        able to run functions. It comes with a lot of cool builtins and helpers.
        I&#39;m developing it fairly actively and bring improvements to it all
        the time.
      </p>
      <h4>Features</h4>
      <p>
        Tote comes with a <code>Func</code> class, which you override and
        bootstrap to create your function. It includes several helpers for input
        validation (with
        <code>joi</code>) and usage, returning data, and error handling.
      </p>
      <p>
        Tote uses another package called{' '}
        <Link href="https://github.com/alizahid/tote-lib">
          <code>tote-lib</code>
        </Link>{' '}
        which has all the helpers in it.
      </p>
      <p>
        Both packages are well documented and should help you get started with
        your function apps.
      </p>
      <h4>Potential improvements</h4>
      <ul>
        <li>AppInsights integration</li>
        <li>Better name?</li>
        <li>
          More abstraction into <code>tote-lib</code> so your function app code
          is lighter and minimal
        </li>
      </ul>

      <hr />

      <p>
        It has been fun shipping code to millions of users across the world
        built with beta tech. We defied every rational thought and still ended
        up with a highly performant product.
      </p>
      <p>
        I had never used Azure before this project, but it was easy and quick to
        learn. We utilize a lot of the platform&#39;s offerings, including
        Functions, CosmosDB, ServiceBus, Blob Storage, App Services, and more.
      </p>

      <hr />

      <p>
        Next, I should write about how to deploy your Tote app to Azure with
        Azure DevOps. The pipelines are tricky to set up but easy once you get
        the hang of things.
      </p>
    </div>
  </Page>
)

export default Post
