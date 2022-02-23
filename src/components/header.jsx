// Imports
import * as React from 'react'

// Export Component
export default function Header() {
  return (
    <header>
      <div class="navbar bg-base-300">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost normal-case text-xl active:bg-orange-500"><i class="fa-solid fa-robot fa-lg"></i>&nbsp;Team 3602</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a href="/" class="active:bg-orange-500">Home</a></li>
            <li><a class="active:bg-orange-500">Sponsors</a></li>
            <li><a class="active:bg-orange-500">Contact</a></li>
            <li><a href="./about" class="active:bg-orange-500">About</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
