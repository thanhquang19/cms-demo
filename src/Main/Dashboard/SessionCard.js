import {React, useState} from 'react';
import './SessionCard.css';
import CheckoutPopUp from './CheckoutPopUp';
import UpcomingPopUp from './UpcomingPopUp';

export default function SessionCard(props) {
  const [status, updateStatus] = useState(props.status); 
  const sessionID = props.sessionId;
  const [checkoutOpen, setCheckoutOpen] = useState(false) //to control the check out popup
  const [upcomingPopUpOpen, setUpcomingPopUpOpen] = useState(false)

  const handleCheckOut = (e) => {
    updateStatus('done'); //update on web, but not in file/database >> Active Sessions isn't updated
    setCheckoutOpen(false);
    
    
  }

  const handleClick = (e) => {
    if(status === 'active') { //if this is an active session card, clicking on it will lead to the check-out popup
      setCheckoutOpen(true);
      
    }
    if(status === 'scheduled') {
      setUpcomingPopUpOpen(true)
    }
    //here, if the session is under scheduled, find a way for its info to populate to customer request form
  }

  
  return (
    //Name, Date, Time, and Services are props passed from an array mapping function on the parent element
    <div className='session-card' onClick={handleClick}>
        <div><strong>{props.custName}</strong></div>
        <div><span>{props.date}</span> <span>{props.time}</span></div>
        <div>{props.services}</div>
        <CheckoutPopUp open={checkoutOpen} onClose={()=>setCheckoutOpen(false)} checkout={handleCheckOut}/>
        <UpcomingPopUp open={upcomingPopUpOpen} onClose={()=>setUpcomingPopUpOpen(false)}/>
    </div>
  )
}
