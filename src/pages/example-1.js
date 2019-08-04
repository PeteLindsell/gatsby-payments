import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Box from "../components/UI/Box/Box"
import TextField from "../components/UI/TextField/TextField"

const Example1 = () => (
  <Layout>
    <SEO title="Example 1" />
    <Box>
      <TextField
        label="Donation amount"
        extraLeft="£"
        error="This field has an error 🙁"
      />
    </Box>
  </Layout>
)

export default Example1
