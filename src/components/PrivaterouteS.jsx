import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth/indexS";

const PrivaterouteS=() => {

    if(isLoggedIn()){
        return <Outlet/>
    } else {
        return <Navigate to={"/LoginAsS"} /> ;
    }
    

}


export default PrivaterouteS ;