import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Hello Blog!</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          voluptatibus cupiditate maiores esse minus ullam ad odio velit
          praesentium nesciunt, facilis tenetur amet, cum earum sint optio
          beatae obcaecati ipsam? Explicabo ea minima blanditiis voluptatum
          perspiciatis sint soluta. In, itaque!
        </p>
      </div>
    </Layout>
  )
}

export default blog
