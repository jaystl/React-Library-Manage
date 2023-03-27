import { Button } from "reactstrap"
import '../css/headings.css'
import { useNavigate } from "react-router-dom"

const Afterbookdel=()=>
{
    let navigate=useNavigate();
    return(
    <div className="heading">
    <center>Your Book has Been Deleted .<br/>
    Have A Great Day!! ;  <br/>
    <Button color="primary" onClick={()=> navigate("/staff/booklists")} >Go To Book List</Button>
       </center> 
    </div>
    )
}

export default Afterbookdel;