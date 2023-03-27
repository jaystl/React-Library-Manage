import { Button } from "reactstrap"
import '../css/headings.css'
import { useNavigate } from "react-router-dom"
import Base from "../components/Base";

const Afterissue=()=>
{
    let navigate=useNavigate();
    return(
        <Base>
    <div className="heading">
    <center>Your Book has Been issued Please check your cart.<br/>
    Have A Great Day!! ;  <br/>
    <Button color="primary" onClick={()=> navigate("/user/cart")} >Go To Book List</Button>
       </center> 
    </div>
    </Base>
    )
}

export default Afterissue;