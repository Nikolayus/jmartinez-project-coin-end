import React from 'react'
import {Helmet} from "react-helmet";

export default function Head() {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/bitcoin-green.png" />
        <title>Martinez & Gonzales</title>
        <link rel="canonical" href="#" />
    </Helmet>
</div>
  )
}
