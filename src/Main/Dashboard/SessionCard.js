import React from 'react';
import './SessionCard.css';

export default function SessionCard(props) {
  const status = props.status;
  const sessionID = props.sessionId;
  return (
    //Name, Date, Time, and Services are props passed from an array mapping function on the parent element
    <div className='session-card'>
        <div><strong>{props.custName}</strong></div>
        <div><span>{props.date}</span> <span>{props.time}</span></div>
        <div>{props.services}</div>
    </div>
  )
}
