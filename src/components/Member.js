
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import { getCurrentUserDetail } from '../auth/indexS';
import '../css/headings.css'
import '../css/card.css'


function Member({member,deletePost}) {
    
    
    let navigate = useNavigate() ;
    

    const issuing = () => {

        let T = getCurrentUserDetail()
        console.log(T)

        if(T.sid) {
            navigate("/user/userdashboard")
        }else {
            alert("Have To Login As Staff First !!!")
        }
     }
    
    return(
        
        <Card className="shadow-sm mt-4">
            <CardBody>
                <h1 className="subheading"> {member.uname}</h1>
                <CardText className="text">
                   <b> User Id: {member.uid}<br/></b>
                    <b>User email: {member.email}<br/></b>
                  
                </CardText>
                <Button color="danger" onClick={()=>deletePost(member)} >Delete Member</Button> 
            </CardBody>
        </Card>

    )
    

    
}

export default Member;