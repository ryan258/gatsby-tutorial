import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/big-image.png"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "ocean.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "big-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "big-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" />
        <caption>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem totam
          pariatur necessitatibus, ratione asperiores nihil.
        </caption>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <caption>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem totam
          pariatur necessitatibus, ratione asperiores nihil.
        </caption>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <caption>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem totam
          pariatur necessitatibus, ratione asperiores nihil.
        </caption>
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
        <Image fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
