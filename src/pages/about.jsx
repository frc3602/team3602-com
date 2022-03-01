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
      <h1 class="text-4xl font-bold p-12 pl-20 pr-20">About Our Team</h1>
      <p class="text-xl pl-20 pr-20">Stuff</p>
      <div class="flex flex-wrap -mx-2 mb-8 pl-20 pr-20">
        <div class="w-full md:w-1/3 lg:w-1/5 px-2 mb-4">
          <div class="flex items-center justify-center">
            <div class="card w-80 bg-base-300 shadow-xl">
              <figure><StaticImage src="../images/build.jpg" alt="Build" /></figure>
              <div class="card-body">
                <h2 class="card-title">Build</h2>
                <p>Build team does precisely what you'd think they
                  do: They build the robot. Everything from CAD designs
                  to conceptual designs are handled by the build team.
                  They make ideas on paper become a reality.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/5 px-2 mb-4">
          <div class="flex items-center justify-center">
            <div class="card w-80 bg-base-300 shadow-xl">
              <figure><StaticImage src="../images/media.jpg" alt="Build" /></figure>
              <div class="card-body">
                <h2 class="card-title">Media</h2>
                <p>Build team does precisely what you'd think they
                  do: They build the robot. Everything from CAD designs
                  to conceptual designs are handled by the build team.
                  They make ideas on paper become a reality.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/5 px-2 mb-4">
          <div class="flex items-center justify-center">
            <div class="card w-80 bg-base-300 shadow-xl">
              <figure><StaticImage src="../images/programming.jpg" alt="Build" /></figure>
              <div class="card-body">
                <h2 class="card-title">Programming</h2>
                <p>Robots need instructions to run. The Programming
                  Team along with all their bits and bytes, write
                  these instructions. They are the brains of the
                  operation. We'd all bark and no bite without them!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/5 px-2 mb-4">
          <div class="flex items-center justify-center">
            <div class="card w-80 bg-base-300 shadow-xl">
              <figure><StaticImage src="../images/programming.jpg" alt="Build" /></figure>
              <div class="card-body">
                <h2 class="card-title">Electrical</h2>
                <p>Electric and wiring handles the soldering,
                  wiring, and other electronics that help our
                  Robomos run. They take care of batteries,
                  the cameras, everything.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/5 px-2 mb-4">
          <div class="flex items-center justify-center">
            <div class="card w-80 bg-base-300 shadow-xl">
              <figure><StaticImage src="../images/programming.jpg" alt="Build" /></figure>
              <div class="card-body">
                <h2 class="card-title">Chairman's</h2>
                <p>Robots need instructions to run. The Programming Team along with all their bits and bytes, write these instructions. They are the brains of the operation. We'd all bark and no bite without them!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-4xl font-bold p-12 pl-20 pr-20">About FIRST & FRC</h1>
      <p class="text-xl pl-20 pr-20">Stuff</p>
      <Footer></Footer>
    </body>
  )
}

// Export Component
export default AboutPage
