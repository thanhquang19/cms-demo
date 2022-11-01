import React from 'react';
import Logout from './LogoutButton/Logout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';
import DataAnalytics from './DataAnalytics/DataAnalytics';


export default function Main(props) {
  
  return (
    <div>
      Logged in as:  <span>{props.currentUser}</span> <span><Logout/></span>
      
      <h1>S-Nails Dashboard</h1>
      
      <Routes>
          <Route path='*' element={<Navbar/>}> 
              <Route index element={<Dashboard/>}/>
              <Route path='*data' element={<DataAnalytics/>}/>
          </Route>
      </Routes>
              
    </div>
  )
}
