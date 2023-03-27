
import React from 'react'
 import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import Base from './Base';
// import { getCurrentUserDetail } from '../auth/indexS';
import '../css/card.css'


function Bookl({book, deletePost}) {
    
    
     let navigate = useNavigate() ;
    

    // const issuing = () => {

    //     let T = getCurrentUserDetail()
    //     console.log(T)

    //     if(T.uid) {
    //         navigate("/user/userdashboard")
    //     }else {
    //         alert("Have To Login As User First !!!")
    //     }
    //  }
    
    return(
        
        <Card className="shadow-sm mt-4">
            <CardBody>
                <h1 className="subheading"> Book title:{book.btitle}</h1>
                <CardText className="text">
                <b>Book Id:{book.bid}<br/></b>
                   {/* <b>User Id:{book.uid}<br/></b> */}
                    <b>Issue Date:{book.issuedate}<br/></b>
                    <b>Expiry Date:{book.expirydate}<br/></b>
                </CardText>
                <Button color="danger" onClick={()=>deletePost(book)}>Return Book </Button> <t/>
                <Button color="success" onClick={()=> navigate("/user/userdashboard")}>Renew Book</Button>
            </CardBody>
        </Card>

    )
    

    
}

export default Bookl ;