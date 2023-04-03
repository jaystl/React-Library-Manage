import { List } from 'reactstrap';
import Base from'../components/Base';
import '../css/headings.css'
import { useNavigate } from 'react-router-dom'
import {Button} from 'reactstrap';
import { toast, Toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { getCurrentUserDetail } from '../auth/indexS';
import { loadAllBooks } from '../services/u-user-service';


const Category=()=>{
    let navigate=useNavigate();
return(
<Base>
<div className='text2'>
    <List>
        <b>
      <menu>
       <li><div><Button onClick={()=> navigate("/user/booklist")}><div className="text2">THRILLER</div></Button> <t/>: contains an exciting plot, typically involving crime or espionage.</div></li><br/> 
       <li><div><Button onClick={()=> navigate("/user/booklist")}><div className="text2">EDUCATIONAL</div></Button> <t/>: contains something that imparts new skills or knowledge.</div></li><br/> 
       <li><div><Button onClick={()=> navigate("/user/booklist")}><div className="text2">ROMANTIC</div></Button> <t/>: contains a type of genre fiction novel which places its primary focus on the relationship and romantic love.</div></li> <br/> 
       <li><div><Button onClick={()=> navigate("/user/booklist")}><div className="text2">SCIENCE-FICTION</div></Button> <t/>: contains a genre of speculative fiction that contains imagined elements that don't exist in the real world.</div></li><br/> 
       <li><div><Button onClick={()=> navigate("/user/booklist")}><div className="text2">AUTOBIOGRAPHY</div></Button> <t/>: contains the biography of oneself narrated by oneself.</div></li><br/>    
      </menu>
      </b>

    </List>
</div>
</Base>

);
}
export default Category;