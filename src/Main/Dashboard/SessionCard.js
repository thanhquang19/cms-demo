import {React, useState} from 'react';
import './SessionCard.css';
import CheckoutPopUp from './CheckoutPopUp';

export default function SessionCard(props) {
  const status = props.status;
  const sessionID = props.sessionId;
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  return (
    //Name, Date, Time, and Services are props passed from an array mapping function on the parent element
    <div className='session-card' onClick={(e) =>  setCheckoutOpen(true)}>
        <div><strong>{props.custName}</strong></div>
        <div><span>{props.date}</span> <span>{props.time}</span></div>
        <div>{props.services}</div>
        <CheckoutPopUp open={checkoutOpen}/>
    </div>
  )
}
