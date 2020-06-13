import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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

const Header = () => {
  // const data = useStaticQuery(getData)
  // console.log(data)
  // const { name } = data.site.siteMetadata.person
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>title: {data.site.siteMetadata.title}</h1>
      <h2>name: {name}</h2> */}
      <h2>
        Hi {name}, Welcome to {title}!
      </h2>
    </div>
  )
}

export default Header
