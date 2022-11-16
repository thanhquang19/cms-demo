import React from 'react'
import Popup from 'reactjs-popup'
import './UpcomingPopUp.css';

export default function UpcomingPopUp(props) {
  return (
    <Popup position='right center' closeOnDocumentClick open={props.open} onClose={props.onClose}>
        <div id='upcoming-popup'>
          <div>reduced-version of customer request form</div>

          <button>Check in</button>

          <button>Reschedule</button>

          <button>Cancel</button>
        </div>
    </Popup>
  )
}
