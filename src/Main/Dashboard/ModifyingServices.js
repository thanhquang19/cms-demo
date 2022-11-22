import {React , useContext, useEffect, useRef, useState}from 'react'
import { services } from '../../snails';
import {SessionContext} from './SessionCard';
import './ModifyingServices.css'

export default function ModifyingServices() {
    const usedServices = useContext(SessionContext);

    const getServicePrice = (usedService) => {
        const mapUsedService = services.filter((service)=> { //find the match in services for the usedService
          return service.Service === usedService;
        })
    
        return mapUsedService[0].Price; //the mapUsedService actually only have 1 element
      }
    
      const usedServicesWithPrice = usedServices.map(usedService => { //create a new array stroring array of [servicename, price]
        return [usedService, getServicePrice(usedService)]
      })
    
      //usedServicesToRender is an array of arrays [service, price]
      const [usedServicesToRender, getUsedServicesToRender] = useState(usedServicesWithPrice)
    
      
      const indexOfServiceToRemove = useRef();
    
      const getTotalPrice = () => {
        let total = 0;
        usedServicesToRender.forEach(service => total += Number(service[1]));
        return total.toFixed(2);
      }
      useEffect(() => getTotalPrice, [usedServicesToRender])
      //whenever usedServicesToRendered changes, useEffect runs >> total Price gets updated
    
      const handleRemove = (e) => {
         
        indexOfServiceToRemove.current = e.target.getAttribute('index'); 
        
        // e.target is a regular js DOM, not React, so to it's get attribute, use .getAttribute('attr name') >> attr value 
        
        //remove the element
        const newServicesToRender = usedServicesToRender.filter(service => usedServicesToRender.indexOf(service) !== Number(indexOfServiceToRemove.current))
        
       
        //update usedServicesToRender
        getUsedServicesToRender(newServicesToRender);
            
        // add update price
        //
      }
    
      const selectedMoreService = useRef();
    
      const addService = (e) => {
        let selectedService = selectedMoreService.current.selectedOptions[0].value.split(',');
        
        // This assumes only one option is selected at a time
        // The value stored in option is a string seperated by a comma >> convert the string to an array
        getUsedServicesToRender(usedServicesToRender.concat([selectedService]));
        // The selectedService is an array, it needs to be wrapped in an array so that when concatted to the usedServicesToRender, it remains an array
        selectedMoreService.current.selectedIndex = 0; //reset the select input
      }
      return (
        
          <table className="modifying">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                usedServicesToRender.map((usedService) =>{
                  
                  return (
                    <tr>
                      <td className='usedService'>{usedService[0]}</td>
                      <td className='usedServicePrice'>${usedService[1]}</td>
                      <td><span className='removeServiceBtn' onClick={handleRemove} index={usedServicesToRender.indexOf(usedService)}>x</span></td>
                      {/* 0 is service name, 1 is service price */}
                    </tr>
                  )
                })
              }
              <tr>
                <td colSpan='3'>
                  <select id='more-services' ref={selectedMoreService} onChange={addService}  >
                    <option disabled  selected> add service</option>
                    {services.map(service => {
                     
                       return <option value={[service.Service, service.Price]}>{service.Service} (${service.Price})</option>
                      
                      
                    })}
                    {/* the value of option is a string 'service, price' */}
                  </select>
                </td>
                
              </tr>
              
            </tbody>
            <tfoot>
                <tr>
                  <th>Total</th>
                  <td className='totalPrice'>${getTotalPrice()}</td>
                </tr>
              </tfoot>
          </table>
       
      );
}
