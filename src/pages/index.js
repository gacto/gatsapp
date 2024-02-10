import * as React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'

const Home = () => {
  return <main>
    <Layout pageTitle="Home">
      <p>Welcome to Home page</p>
      <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/pic.jpg"
      />
    </Layout>
  </main>
}

export const Head = () => <title>Home</title>

export default Home