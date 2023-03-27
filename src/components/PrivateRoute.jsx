import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { IsLoggedIn } from '../auth/indexS';

const PrivateRoute =()=> {

    return IsLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />

};

export default PrivateRoute