import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Base from "../components/Base"
import { loadAllBooks } from '../services/u-user-service'
import {Row, Col, Container, Button} from 'reactstrap' 
import Book from '../components/Book'
import '../css/headings.css'
import axios from 'axios'
import { getCurrentUserDetail } from '../auth/indexS'
import SearchBar from '../components/SearchBar'
import '../css/Table.css'

function BookList() {


    const [book, setbook] = useState()

    const [searchInput, setSearchInput] = useState("");

    let navigate = useNavigate() ;
       
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    // };
       
    if (searchInput.length > 0) {
        book.filter((value) => {
            console.log(value)
        return null;
    });
    };
   
   
   let T = getCurrentUserDetail()
 

   const issuing = () => {

    // console.warn(book)

    let T = getCurrentUserDetail()
    console.log(T)

    if(T.uid) {
        navigate("/user/userdashboard")
        
    }else {
        alert("Have To Login As User First !!!")
    }
 }


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
                       
                        <h1 className="heading2"><center>The Number of Total Books : {book?.length}</center></h1><br/>
                        <div className='text3'><center><b>Your User ID is:{T.uid}</b></center></div>

                        {/* <input
                            type="search"
                            placeholder="Search book title"
                            onChange={handleChange}
                             value={searchInput} /> */}
                        <div className='search'>
                            <SearchBar placeholder="Search Books" data={book}/>
                        </div>
                        
 
                        {/* <div className='search'>
                <SearchBar placeholder="search books" data={book}/>
            </div> */}

            {/* <table striped>
            
            <thead>
                <tr>
                    <th>Bood Id</th>
                    <th>Book Title</th>
                    <th>Book Category</th>
                    <th>Book Author</th>
                    <th></th>
                </tr>
            </thead>
            </table> */}
            
                        {/* {
                            book?.map((book) => (
                                <Book book={book} key={book.bid}/>
                            ))
                        } */}

                    </Col>
                </Row>
            </div>

            <table className="table">
            <thead className='tablehead'>
                <tr>
                    <th>Book Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='tablebody'>
            {
                book?.map((book, bid)=>{
                    return(
                        <tr key={book.bid}>
                            <td>{book.bid}</td>
                            <td>{book.btitle}</td>
                            <td>{book.bdesc}</td>
                            <td>{book.bcategory}</td>
                            <td>{book.bauthor}</td>
                            <td>
                                 {" "}
                                <Button color="success" onClick={issuing}>Issue Book</Button>
                             </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>

        </Container>
        </Base>

    )
}


export default BookList ;