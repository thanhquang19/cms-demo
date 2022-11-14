import React from 'react'
import SessionCard from './SessionCard'
import './ActiveSession.css';
import {sessions} from '../../snails';

export default function ActiveSession(props) {
  return (
    <div id='active'>
        <h2>Active Sessions</h2>
        {
          sessions.map(session => {
            if(session.Status === 'active') {
              return <SessionCard 
              custName = {session.CustomerName} 
              date={session.Date}
              time={session.Time}  
              services={session.Service}
              status={session.Status}
              sessionId = {session.SessionID}
              />
            }
            return <></>
          })
        }
        
    </div>
  )
}
