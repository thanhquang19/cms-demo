

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login/Login';

import PrivateRoute from './PrivateRoute'
import DataAnalytics from './Main/DataAnalytics/DataAnalytics';


function App() {



  return (


    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PrivateRoute/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        {/* <Route path='/data' element={<DataAnalytics/>}></Route> */}
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
