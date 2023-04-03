
import React from 'react'
 import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import Base from './Base';
// import { getCurrentUserDetail } from '../auth/indexS';
import '../css/card.css'
import { format } from 'date-fns'


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
        
        // <Card style={{
        //     width: '18rem'
        //   }}
        // >
        //     <CardHeader>Book title:{book.btitle}</CardHeader>
        //     <CardBody>
        //         {/* <h1 className="subheading"> Book title:{book.btitle}</h1> */}
        //         <CardText className="text3">
        //         <b>Book Id:{book.bid}<br/></b>
        //            <b>User Id:{book.uid}<br/></b>
        //             <b>Issue Date:{book.issuedate}<br/></b>
        //             <b>Expiry Date:{book.expirydate}<br/></b>
        //         </CardText>
        //         <Button color="danger" onClick={()=>deletePost(book)}>Return Book </Button> <t/>
        //         <Button color="success" onClick={()=> navigate("/user/userdashboard")}>Renew Book</Button>
        //     </CardBody>
        // </Card>

        <Card className='shadow-sm mt-4'
            style={{
            width: '30rem'
        }}
        >
        <CardHeader className="subheading">Book title: {book.btitle}</CardHeader>
            <ListGroup >
                <ListGroupItem>Book Id: {book.bid}</ListGroupItem>
                <ListGroupItem>User Id: {book.uid}</ListGroupItem>
                <ListGroupItem>Issue Date: {book.issuedate}</ListGroupItem>
                <ListGroupItem>Expiry Date: {book.expirydate}</ListGroupItem>
            </ListGroup>
        <CardFooter>
            <Button color="danger" onClick={()=>deletePost(book)}>Return Book </Button> <t/>
            <Button color="success" onClick={()=> navigate("/user/userdashboard")}>Renew Book</Button>
        </CardFooter>
        </Card>
    )
    

    
}

export default Bookl ;