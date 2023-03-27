import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth/indexS";

const PrivaterouteU=() => {

    if(isLoggedIn()){
        return <Outlet/>
    } else {
        return <Navigate to={"/LoginAsU"} /> ;
    }
}
export default PrivaterouteU;