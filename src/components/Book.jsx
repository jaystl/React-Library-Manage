
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import { getCurrentUserDetail } from '../auth/indexS';
import '../css/headings.css'
import '../css/card.css'


function Book({book={btitle:"This is Default Book", bid:"0",bdesc:"none", bcategory:"null",bauthor:"null"}}) {
    
    
    let navigate = useNavigate() ;
    

    const issuing = () => {

        let T = getCurrentUserDetail()
        console.log(T)

        if(T.uid) {
            navigate("/user/userdashboard")
        }else {
            alert("Have To Login As User First !!!")
        }
     }
    
    return(
        
        <Card className="shadow-sm mt-4">
            <CardBody>
                <h1 className="subheading"> {book.btitle}</h1>
                <CardText className="text">
                   <b> Book Id: {book.bid}<br/></b>
                    <b>Book Description: {book.bdesc}<br/></b>
                    <b>Book Category: {book.bcategory}<br/></b>
                    <b>Book Author: {book.bauthor}<br/></b>
                </CardText>
                <Button color="primary" onClick={issuing}>Issue Book</Button> 
            </CardBody>
        </Card>

    )
    

    
}

export default Book ;