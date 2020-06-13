import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  const { title, person } = data.site.siteMetadata
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <h1>Header.JS</h1>
      <h2>
        Hello, {person.name}! Welcome to {title}
      </h2>
    </div>
  )
}

export default ComponentName
