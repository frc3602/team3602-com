// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
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
      <header>
        <div class="navbar bg-base-300">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl active:bg-orange-500"><i class="fa-solid fa-robot fa-lg"></i>&nbsp;Team 3602</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li><a class="active:bg-orange-500">Home</a></li>
              <li><a class="active:bg-orange-500">Sponsors</a></li>
              <li><a class="active:bg-orange-500">Contact</a></li>
              <li><a class="active:bg-orange-500">About</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div class="hero min-h-screen bg-base-100">
          <div class="flex-col hero-content lg:flex-row">
            <img src="https://www.team3602.com/images/teamphoto.jpg" class="max-w-2xl rounded-lg shadow-2xl" />
            <div>
              <h1 class="text-5xl font-bold">We are Team 3602!</h1>
              <p class="py-6">We are FIRST Robotics Competition Team 3602, The RoboMos, from Escanaba Senior High School in Escanaba, Michigan. Our team was founded back in 2010 and ever since then we have had the great Marie Young and Gabe Kluka as our team lead mentors. We also mentor two FIRST Tech Challenge teams and one FIRST LEGO League team.</p>
              <button class="btn bg-orange-500 hover:bg-orange-600">Learn More</button>
            </div>
          </div>
        </div>
      </main>
      <footer class="p-10 footer bg-base-300 text-neutral-content">
        <div>
          <i class="fa-solid fa-robot fa-3x"></i>
          <p>FRC Team 3602, The RoboMos</p>
          <p>Copyright © 2022 Team 3602 - All Rights Reserved.</p>
        </div>
        <div>
          <span class="footer-title">Social</span>
          <div class="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
      </footer>
    </body>
  )
}

// Export Component
export default IndexPage
