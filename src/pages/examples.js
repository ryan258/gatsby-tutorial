import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

// 2.
const examples = ({ data }) => {
  // console.log(props)
  // 3.
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>hello from examples page</h1>
      <Header />
      <HeaderStatic />
      {/* <h2>Author: {props.data.site.info.author}</h2> */}
      {/* 4. */}
      <h2>Author: {author}</h2>
    </Layout>
  )
}

// 1
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
