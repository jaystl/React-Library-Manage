import React from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import { getCurrentUserDetail } from '../auth/indexS';
import { deleteBook } from '../services/s-user-service';

// import AddnewBook from './Addnewbook';
// import '../css/headings.css'
// import '../css/card.css'


function BookS({book={btitle:"This is Default Book", bid:"0",bdesc:"none", bcategory:"null",bauthor:"null"}, deletePost}) {
    
    
    let navigate = useNavigate() ;
    

    const deleting = () => {

        let T = getCurrentUserDetail()
        console.log(T)

        if(T.sid) {
            navigate("/staff/staffdashboard")
        }else {
            alert("Have To Login As Staff First !!!")
        }
     }

    

    

    
    return(
        
        <Card className="shadow-sm mt-4">
            <CardBody>
                <h1 className="subheading"> Book Title:{book.btitle}</h1>
                <CardText className="text">
                    <b>Book id:  {book.bid}<br/></b>
                    <b>Book Description:  {book.bdesc}<br/></b>
                    <b>Book Category: {book.bcategory}<br/></b>
                    <b>Book Author: {book.bauthor}<br/></b>
                </CardText>
                <Button color="danger" onClick={()=>deletePost(book)}>Delete Book</Button> 
                
                
            </CardBody>
        </Card>

    )
}

export default BookS;