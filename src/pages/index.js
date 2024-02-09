import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const Home = () => {
  return <main>
    <Layout pageTitle="Home">
      <p>Welcome to Home page</p>
    </Layout>
  </main>
}

export const Head = () => <title>Home</title>

export default Home