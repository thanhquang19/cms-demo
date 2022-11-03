import React from 'react'
import SessionCard from './SessionCard'
import'./UpcomingSession.css'


export default function UpcomingSession(props) {
  return (
    
    <div id='upcoming'>
        <h2>Upcoming Sessions</h2>
        <SessionCard/>
        <SessionCard/>
        <SessionCard/>
    </div>
  )
}
