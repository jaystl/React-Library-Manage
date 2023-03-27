import React, { useEffect, useState } from 'react'
import Base from "../components/Base"
import { loadAllBooks } from '../services/u-user-service'
import {Row, Col, Container} from 'reactstrap' 
import Book from '../components/Book'
import '../css/headings.css'
import axios from 'axios'
import { getCurrentUserDetail } from '../auth/indexS'
function BookList() {


    const [book, setbook] = useState()
   
   
   let T = getCurrentUserDetail()
 



    useEffect(() => {

        //load all the post from server
        loadAllBooks().then((data) => {
            console.log(data)
            setbook(data)
        }).catch(error=>{
            console.log(error)
        })

    }, [])


    return(
        
        <Base>
        <Container className="mt-3">
            <div className="container-fluid">
                <Row>
                    <Col md={
                        {
                            size:10,
                            offset:1
                        }
                    }>
                       
                        <h1 className="heading"><center>The Number of Total Books : {book?.length}</center></h1><br/>
                        <div className='text3'><center><b>Your User ID is:{T.uid}</b></center></div>
                        
 
                        

                        {
                            book?.map((book) => (
                                <Book book={book} key={book.bid}/>
                            ))
                        }

                    </Col>
                </Row>
            </div>

        </Container>
        </Base>

    )
}


export default BookList ;