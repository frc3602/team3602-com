// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'

// Define Component
const ContactPage = () => {
  return (
    <body>
      <Helmet>
        <title>Contact | Team 3602</title>
        <meta charset="UTF-8"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header></Header>
      <h1 class="text-4xl font-bold p-12 pl-20 pr-20">Contact Us</h1>
      <Footer></Footer>
    </body>
  )
}

// Export Component
export default ContactPage
