import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const PublicRoute = ({ children }) => {

    // const { user } = useContext(UserContext);
  
    return (
      <>
        {' '}
        {/* {user.logged ? <Navigate to='dashboard' /> : children} */}
        {children}
      </>
    );
  };
  
  export default PublicRoute;