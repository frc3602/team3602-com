// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'

// Define Component
const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>Home | Team 3602</title>
        <meta charset="UTF-8"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header></Header>
      <main>
        <div class="hero min-h-fit bg-base-100" style={{ marginTop: 100, marginBottom: 100 }}>
          <div class="flex-col hero-content lg:flex-row">
            <StaticImage src="../images/teamphoto.jpg" class="max-w-2xl rounded-lg shadow-2xl" />
            <div class="pl-12">
              <h1 class="text-5xl font-bold">We are Team 3602!</h1>
              <p class="py-6">We are FIRST Robotics Competition
                Team 3602, The RoboMos, from Escanaba Senior High
                School in Escanaba, Michigan. Our team was founded
                back in 2010 and ever since then we have had the
                great Marie Young and Gabe Kluka as our team lead
                mentors. We also mentor two FIRST Tech Challenge
                teams and one FIRST LEGO League team.</p>
              <button class="btn btn-ghost bg-orange-500 hover:bg-orange-600"><a href="/about">Learn More</a></button>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export Component
export default IndexPage


