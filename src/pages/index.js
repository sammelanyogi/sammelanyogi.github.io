import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Hi people</h1>
      <p>Welcome to my website.</p>
      <p>Now go build something great.</p>
      <div style={{ width: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="gatsby-astronaut.png" />
      </div>

    </div>

  </Layout>
)

export default IndexPage
