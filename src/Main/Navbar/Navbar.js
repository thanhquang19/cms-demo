import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to=''>Dashboard</Link>
                </li>
                <li>
                    <Link to='*data'>Data Analytics</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}
