import React from 'react'
import SessionCard from './SessionCard'
import './ActiveSession.css';

export default function ActiveSession(props) {
  return (
    <div id='active'>
        <h2>Active Sessions</h2>
        <SessionCard/>
        <SessionCard/>
        <SessionCard/>
        <SessionCard/>
        <SessionCard/>
        
    </div>
  )
}
