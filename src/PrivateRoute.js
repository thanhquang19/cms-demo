import React from 'react'
import { UseAuth } from './firebase';

import Main from '../src/Main/Main';
import Login from './Login/Login';

export default function PrivateRoute( props){

    const currentUser = UseAuth();

    if(currentUser) {
        return <Main currentUser={currentUser.email}/>
    }
    else {
        return <Login/>
    }
}
