// Imports
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Export Component
export default function Header() {
  return (
    <header>
      <div class="navbar bg-base-300">
        <div class="navbar-start">
          <div class="flex-1">
            <a href="/" class="btn btn-ghost normal-case text-xl active:bg-orange-500"><StaticImage src="../images/logo.png" width={35} height={44} />&nbsp;Team 3602</a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="flex-none hidden md:flex">
            <ul class="menu menu-horizontal p-0">
              <li><a href="/" class="active:bg-orange-500">Home</a></li>
              <li><a href="/sponsors" class="active:bg-orange-500">Sponsors</a></li>
              <li><a href="/contact" class="active:bg-orange-500">Contact</a></li>
              <li><a href="/about" class="active:bg-orange-500">About</a></li>
            </ul>
          </div>
          <div class="dropdown dropdown-end md:hidden">
            <label tabindex="0" class="m-1 btn bg-base-300 active:bg-orange-500 hover:bg-base-100 btn-ghost lg:hidden"><i class="fa-solid fa-bars fa-2xl"></i></label>
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li><a href="/" class="active:bg-orange-500">Home</a></li>
              <li><a href="/sponsors" class="active:bg-orange-500">Sponsors</a></li>
              <li><a href="/contact" class="active:bg-orange-500">Contact</a></li>
              <li><a href="/about" class="active:bg-orange-500">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
