import {React, useRef} from 'react';
import './RequestFrom.css';
import { services, customers } from '../../snails';

export default function RequestForm(props) {

    const custName = useRef();
    const custTel = useRef();
    const preferredDate = useRef();
    const preferredTime = useRef();
    const selectedSerivce = useRef([]); 
    
    let customerNames = customers.map(customer => customer.CustomerName); //may need to use useEffect and useState to fetch data for each update. custName is useState?

    // try to loop through the checkboxes and push the value to the || also consider using useState || haven't put ref to input elements
    
    const getCustList = (e)=> {
        if(custName.current.value.length > 0) {
            let nameSearched = custName.current.value.toLowerCase;
            customerNames = customerNames.filter(customerName => customerName.toLowerCase.indexOf(nameSearched) !== -1);
        }
        

    }
    return (
        <form id='request-form'>
                <h2>Customer Request Form</h2>
                <div>Session ID: <span id='session-id'>Session ID will go here</span></div>
                
                <fieldset>
                     <legend>Customer Info</legend>
                     <br/>
                    <input ref={custName} onChange={getCustList} type='text' id='cust-name' name='cust-name' placeholder='customer name' required list='custList'></input>
                    <datalist id='custList'>
                        {customerNames.map(customerName => <option>{customerName}</option>)}
                    </datalist>
                    <input ref={custTel} type='tel' id='cust-tel' name='cust-tel' placeholder='phone number' required></input>
                </fieldset>
                
                <fieldset>
                    <legend>Preferred Date and Time</legend>
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
                    <legend>Services</legend>  
                 
                    {
                        services.map(service => {
                            return (
                                <div>
                                    <input type='checkbox' id={service.ServiceID} name='selected-service' className='selected-service' value={service.ServiceID}></input>
                                    <label for={service.ServiceID}>{service.Service}</label>
                                </div>
                            )
                        })

                    }
        

                </fieldset>
                
                <div id='btn-group'>
                    <button id='schedule-bttn'>Schedule</button>
                    <button id='checkin-bttn'>Check In</button>
                    <button id='cancel-bttn' disabled>Cancel</button>
                </div>
                <br/>
                <div><h4 id='return-msg'>Return Message After Each Button</h4></div>
            </form>
  )
}
