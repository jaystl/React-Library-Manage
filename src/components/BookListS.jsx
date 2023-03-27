import React, { useEffect, useState } from 'react'
import Base from "./Base"
import { loadAllBooks } from '../services/s-user-service'
import {Row, Col, Container,Button} from 'reactstrap' 
import BookS from './BookS'
import { deleteBook } from '../services/s-user-service'
import{toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import '../css/headings.css'


const BookListS=()=> {


    const [data, setdata] = useState()
    let navigate=useNavigate();




    useEffect(() => {

        //load all the post from server
        loadAllBooks().then((data) => {
            console.log(data)
            setdata(data)
        }).catch(error=>{
            console.log(error)
        })

    }, [])
    
    function deletePost(post) {

        deleteBook(post.bid).then(res=>{
            console.log(res)
            toast.success("Book Removed Succesfully!!")
            navigate('/staff/afterbookdel')
        })
        .catch(error=>{
            console.log(error)
            toast.error("Error :(")
        })
    }


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
                        <h1 className="heading"><center><b>The Number of Total Books : {data?.length}</b></center></h1>
                        <Button color="success" onClick={()=> navigate("/staff/addnewbook")}>Add new Book</Button> <t/>
                        <Button color="primary" onClick={()=> navigate("/staff/memberlist")} >Go To Members List</Button>
                         
                        

                        {
                            data?.map((book) => (
                                <BookS book={book} key={book.bid} deletePost={deletePost}/>
                            ))
                        }

                    </Col>
                </Row>
            </div>

        </Container>
        </Base>

    )
}


export default BookListS;