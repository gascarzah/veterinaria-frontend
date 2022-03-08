import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const PublicRoute = ({ children }) => {
  const state = useSelector((state) => state);
  const { authReducer } = state;
  const { user } = authReducer;
  
  if(user.logged){
  const token = user?.access_token
  console.log(token)
    const decoded = jwt_decode(token);
    console.log(decoded)
  }
  
  console.log('llega a dashboard')
  console.log(user.logged)
    return (
      <>
        {' '}
        {user.logged ? <Navigate to='dashboard' /> : children}
        
      </>
    );
  };
  
  export default PublicRoute;