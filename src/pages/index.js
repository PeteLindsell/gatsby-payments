import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Link to="/example-1/">Example 1</Link>
    <Link to="/example-2/">Example 2</Link>
  </Layout>
)

export default IndexPage
