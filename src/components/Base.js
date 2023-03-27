
import CustomNavbar from "./CustomNavbar.js"
import React from "react";


const Base=({title= "Welcome to our Website",children})=>{

    return(
<div className="container-fluid p-0 m-0">
    <CustomNavbar/>    
 {children} 
</div>

    );
};

export default Base;