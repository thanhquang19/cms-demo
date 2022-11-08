import {React, useRef} from 'react';
import './RequestFrom.css';

export default function RequestForm(props) {

    const custName = useRef();
    const custTel = useRef();
    const preferredDate = useRef();
    const preferredTime = useRef();
    const selectedSerivce = useRef([]); 
    // try to loop through the checkboxes and push the value to the || also consider using useState || haven't put ref to input elements
    return (
        <form id='request-form'>
                <h2>Customer Request Form</h2>
                <div>Session ID: <span id='session-id'>Session ID will go here</span></div>
                
                <fieldset>
                     <lengend>Customer Info</lengend>
                     <br/>
                    <input ref={custName} type='text' id='cust-name' name='cust-name' placeholder='customer name' required></input>
                    <input ref={custTel} type='tel' id='cust-tel' name='cust-tel' placeholder='phone number' required></input>
                </fieldset>
                
                <fieldset>
                    <lengend>Select preferred date and time</lengend>
                    <br/>
                    <input ref={preferredDate} type='date' id='preferred-date' name='preferred-date' placeholder=''></input>
                    <select ref={preferredTime} id='time-slot' name='time-slot'>
                        {/* write code to only show available time slot */}
                        <option value='time01'>09:00 AM</option>
                        <option value='time02'>10:00 AM</option>
                        <option value='time03'>11:00 AM</option>
                        <option value='time04'>12 noon</option>
                        <option value='time05'>13:00 PM</option>
                        <option value='time06'>14:00 PM</option>
                        <option value='time07'>15:00 PM</option>
                        <option value='time08'>16:00 PM</option>
                        <option value='time09'>17:00 PM</option>
                        <option value='time10'>18:00 PM</option>
                    </select>

                </fieldset>
                
                <fieldset id='services'>
                    <lengend>Select services</lengend>  
                    <br/>
                    {/* Conver the input to an JSX component, render base on the array services */}
                    <input type='checkbox' id='service01' name='selected-service' class='selected-service' value='service01'></input>
                    <label form='service01'>Service 01</label>
                    
                    <input type='checkbox' id='service02' name='selected-service' class='selected-service' value='service02'></input>
                    <label form='service02'>Service 02</label>
                    
                    <input type='checkbox' id='service03' name='selected-service' class='selected-service' value='service03'></input>
                    <label form='service03'>Service 03</label>
                    
                    <input type='checkbox' id='service04' name='selected-service' class='selected-service' value='service04'></input>
                    <label form='service04'>Service 04</label>
                    
                    <input type='checkbox' id='service05' name='selected-service' class='selected-service' value='service05'></input>
                    <label form='service05'>Service 05</label>
                    
                    <input type='checkbox' id='service05' name='selected-service' class='selected-service' value='service06'></input>
                    <label form='service06'>Service 06</label>

                </fieldset>
                
                <button id='schedule-bttn'>Schedule</button>
                <button id='checkin-bttn'>Check In</button>
                <button id='cancel-bttn' disabled>Cancel</button>
                <br/>
                <div><h4>Return Message After Each Button</h4></div>
            </form>
  )
}
