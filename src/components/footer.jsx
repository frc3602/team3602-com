// Imports
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Export Component
export default function Footer() {
  return (
    <footer class="p-10 footer bg-base-300 text-neutral-content">
      <div>
      <StaticImage src="../images/logo.png" width={35} height={44} />
        <p>FRC Team 3602, The RoboMos</p>
        <p>Copyright © 2022 Team 3602 - All Rights Reserved.</p>
      </div>
      <div>
        <span class="footer-title">Social</span>
        <div class="grid grid-flow-col gap-4">
          <a href='mailto:team3602@gmail.com'><i class="fa-solid fa-envelope fa-xl"></i></a>
          <a href='https://www.instagram.com/robomos/'><i class="fa-brands fa-instagram fa-xl"></i></a>
          <a href='https://www.facebook.com/robomos/'><i class="fa-brands fa-facebook fa-xl"></i></a>
          <a href='https://www.youtube.com/user/Robomos3602/'><i class="fa-brands fa-youtube fa-xl"></i></a>
        </div>
      </div>
    </footer>
  )
}
