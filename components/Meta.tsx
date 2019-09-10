import React from 'react'
import Head from 'next/head'

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="Description" content="A web development blog and portfolio site for Christian Kirkeby." />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    {/* <link rel="shortcut icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" /> */}
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Christian Kirkeby</title>
  </Head>
)

export default Meta