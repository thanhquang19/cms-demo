import React from 'react'
import Popup from 'reactjs-popup'
import './CheckoutPopUp.css'
import ModifyingServices from './ModifyingServices'
// for simplicty, the when Proceed to Pay is click, the the checkout pop up close, user is navigate back to the appointments page
// status of the session will be update to 'done' (HOWWWW)

export default function CheckoutPopUp(props) {

  const checkOutDateTime = () => {
    let checkoutTime = new Date();
    return checkoutTime.toLocaleDateString('us-US') + " " + checkoutTime.toLocaleTimeString();
    
  }
  return (
    <Popup position='center center' closeOnDocumentClick open={props.open} onClose={props.onClose}>
        <div id='checkout'>
            <h1>s.nails</h1>
            <div className='billingsInfo'>
             
              <table>
                <tr>
                  <th>{props.sessionInfo.custName} </th>
                  <td  >
                    <p>{checkOutDateTime()}</p>
                    session id goes here
                  </td>
                </tr>
              </table>
             
              
               
              
              
              <ModifyingServices className='modifying'/>
            </div>
            <button type='submit' id='checkoutbtn' onClick={props.checkout}>Proceed to Checkout</button> 
        </div>
    </Popup>
  )
}
