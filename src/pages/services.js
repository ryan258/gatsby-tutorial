import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/services.module.css"
// console.log(styles)

export default class services extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>Hello Services!</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            ratione amet aspernatur quas vel dolorum. Deleniti tenetur autem
            quasi, nesciunt facere inventore optio et labore similique ab
            asperiores tempora error.
          </p>
        </div>
      </Layout>
    )
  }
}
