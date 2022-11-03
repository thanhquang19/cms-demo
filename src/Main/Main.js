import React from 'react';
import Logout from './LogoutButton/Logout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';
import DataAnalytics from './DataAnalytics/DataAnalytics';
import './Main.css';

export default function Main(props) {
  
  return (
    <div id='main'>
            
      <header>
        <div>{props.currentUser} <span><Logout/></span></div>
        <h1>S-Nails Customer Management System</h1>
        
      </header>
      
      <Routes>
          <Route path='*' element={<Navbar/>}> 
              <Route index element={<Dashboard/>}/>
              <Route path='*data' element={<DataAnalytics/>}/>
          </Route>
      </Routes>
              
    </div>
  )
}
