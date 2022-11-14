import React from 'react'
import Popup from 'reactjs-popup'
import './CheckoutPopUp.css'

export default function CheckoutPopUp(props) {
  return (
    <Popup position='right center' closeOnDocumentClick open={props.open} onClose={props.onClose}>
        <div>Popup content goes here</div>
    </Popup>
  )
}
