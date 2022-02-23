// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'

// Define Component
const AboutPage = () => {
  return (
    <body>
      <Helmet>
        <title>About | Team 3602</title>
        <meta charset="UTF-8"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header></Header>
      <h1>About</h1>
      <Footer></Footer>
    </body>
  )
}

// Export Component
export default AboutPage
