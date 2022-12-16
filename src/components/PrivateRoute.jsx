import React, { useEffect } from 'react';
import {Route,useNavigate} from 'react-router-dom';
import {auth} from '../lib/firebase'


const PrivateRoute = ({ component: Component}) => {
  const navigate=useNavigate();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(!user){
        navigate('/')
      }
    })
  },[]);

  return (
    <Component/>
  )
}
  
  export default PrivateRoute;