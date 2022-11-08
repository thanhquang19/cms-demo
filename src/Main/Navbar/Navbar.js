import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <>
        <nav id='main-nav'>
            <ul>
                <li>
                    <Link to=''>appointments</Link>
                </li>
                <li>
                    <Link to='*data'>data analytics</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}
