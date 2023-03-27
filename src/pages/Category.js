import { List } from 'reactstrap';
import Base from'../components/Base';
import '../css/headings.css'
import { useNavigate } from 'react-router-dom'
import {Button} from 'reactstrap';


const Category=()=>{
    let navigate=useNavigate();
return(
<Base>
<div className='text2'>
    <List>
        <b>
      <ul>
       <li><Button onClick={()=> navigate("/user/booklist")}><div className="text2">THRILLER</div></Button> <t/></li><br/> 
       <li><Button onClick={()=> navigate("/user/booklist")}><div className="text2">EDUCATIONAL</div></Button> <t/></li> <br/> 
       <li><Button onClick={()=> navigate("/user/booklist")}><div className="text2">ROMANTIC</div></Button> <t/></li> <br/> 
       <li><Button onClick={()=> navigate("/user/booklist")}><div className="text2">SCI-FI</div></Button> <t/></li> <br/> 
       <li><Button onClick={()=> navigate("/user/booklist")}><div className="text2">AUTOBIOGRAPHY</div></Button> <t/></li><br/>  
       <li><Button onClick={()=> navigate("/user/booklist")}><div className="text2">POEMS</div></Button> <t/></li> <br/>   
      </ul>
      </b>

    </List>
</div>
</Base>

);
}
export default Category;