import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PublicRoute = ({ children }) => {

  const state = useSelector((state) => state);
  const { authReducer } = state;
  const { user } = authReducer;
  


    return (
      <>

        {' '}
        {user.logged ? <Navigate to='dashboard' /> : children}
        
      </>
    );
  };
  
  export default PublicRoute;