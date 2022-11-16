import React from 'react'
import SessionCard from './SessionCard'
import'./UpcomingSession.css';
import {sessions} from '../../snails';


export default function UpcomingSession(props) {
  return (
    
    <div id='upcoming'>
        <h2>Upcoming Sessions</h2>
        {
          sessions.map(session => {
            {/* here, the session should be filter for the next 2 days
            and sorted */}
            if(session.Status === 'scheduled') {
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
