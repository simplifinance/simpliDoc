import NextHead from "next/head"
import React from "react"

const SEOHead = ({ title, description, url, ogImage }) => {
  const joinedTitle = title ? `${title} | Simpli Finance` : "Simpli Finance "

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{joinedTitle}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="keywords" content="Defi, Protocol Web3" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={joinedTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="icon" href="/favicon" />
      <meta name="msapplication-TileColor" content="#F9F4F4" />
      <meta name="theme-color" content="#F87C00" />
    </NextHead>
  )
}

SEOHead.defaultProps = {
  title: "",
  description:
    "Simpli Finance - Enjoy Decentralised Protocols Built On The Blockchain",
  ogImage: "images/gallery/1.png",
}

export default SEOHead
