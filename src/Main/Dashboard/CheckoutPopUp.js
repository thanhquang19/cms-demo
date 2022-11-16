import React from 'react'
import Popup from 'reactjs-popup'
import './CheckoutPopUp.css'
// for simplicty, the when Proceed to Pay is click, the the checkout pop up close, user is navigate back to the appointments page
// status of the session will be update to 'done' (HOWWWW)

export default function CheckoutPopUp(props) {
  return (
    <Popup position='center center' closeOnDocumentClick open={props.open} onClose={props.onClose}>
        <div id='checkout'>
            <h2>Checkout</h2>
           
            <button type='submit' onClick={props.checkout}>Proceed to Checkout</button> 
        </div>
    </Popup>
  )
}
