import React from 'react';
import RequestForm from './RequestForm';
import ActiveSession from './ActiveSession';
import UpcomingSession from './UpcomingSession';
import './Dashboard.css';


export default function Dashboard() {
  return (
    <div id='dashboard-container'>
        
        <RequestForm/>
        <ActiveSession/>
        <UpcomingSession/>
        
    </div>
  )
}
