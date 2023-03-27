import { Button } from "reactstrap"
import '../css/headings.css'
import { useNavigate } from "react-router-dom"

const Aftermemdel=()=>
{
    let navigate=useNavigate();
    return(
    <div className="heading">
    <center>The member has been removed.<br/>
    Have A Great Day!! ;  <br/>
    <Button color="primary" onClick={()=> navigate("/staff/memberlist")} >Go To Members List</Button>
       </center> 
    </div>
    )
}

export default Aftermemdel;