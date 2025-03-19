import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav>
         <ul>
            <li>
                <Link to={'/Home'}>Home</Link>
            </li>
            <li>
                <Link to={'/project'}>project</Link>
            </li>
            <li>
                <Link to={'/new'}>new</Link>
            </li>
            <li>
                <Link to={'/contact'}>contact</Link>
            </li>
         </ul>
      </nav>
    </div>
  )
}
