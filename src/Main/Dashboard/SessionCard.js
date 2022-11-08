import React from 'react';
import './SessionCard.css';

export default function SessionCard(props) {


  return (
    //Name, Date, Time, and Services are props passed from an array mapping function on the parent element
    <div class='session-card'>
        <div><strong>Customer Name here</strong></div>
        <div><span>Date</span> <span>Time</span></div>
        <div>Services go here</div>
    </div>
  )
}
