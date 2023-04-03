
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import { getCurrentUserDetail } from '../auth/indexS';
import '../css/headings.css'
import '../css/card.css'
import '../css/styling.css'
import { showallpost } from '../services/cart-service';
import SearchBar from './SearchBar';
 


function Book({book={btitle:"This is Default Book", bid:"0",bdesc:"none", bcategory:"null",bauthor:"null"}}) {
    
    // let bookdata = showallpost();

    let navigate = useNavigate() ;
    

    // const [searchInput, setSearchInput] = useState("");
       
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    // };
       
    // if (searchInput.length > 0) {
    //     book.filter((value) => {
    //         console.log(value)
    //     return null;
    // });
    // };
    
    

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

    
    return(

        <table className="table">
            <thead>
                <tr>
                    <th>Book Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
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
        
        // <div>

        // <Card className="shadow-sm mt-4">
            

        //     <CardBody>
        //         <h1 className="subheading"> {book.btitle}</h1>
        //         <CardText className='text3'>
        //            <b> Book Id: {book.bid}<br/></b>
        //             <b>Book Description: {book.bdesc}<br/></b>
        //             <b>Book Category: {book.bcategory}<br/></b>
        //             <b>Book Author: {book.bauthor}<br/></b>
        //         </CardText>

        //         <Button color="primary" onClick={issuing}>Issue Book</Button> 
        //     </CardBody>
        // </Card>

        
        // {/* <input
        //     type="search"
        //     placeholder="Search book title"
        //     onChange={handleChange}
        //     value={searchInput} /> */}
        //     {/* <div className='search'>
        //         <SearchBar placeholder="search books" data={book}/>
        //     </div> */}

        // {/* <table striped>

        // <thead>
        //     <tr>
        //         <th>Bood Id</th>
        //         <th>Book Title</th>
        //         <th>Book Category</th>
        //         <th>Book Author</th>
        //         <th></th>
        //     </tr>
        // </thead>
        
        // <tbody>
        //     <tr>
        //         <td>{book.bid}</td>
        //         <td>{book.btitle}</td>
        //         <td>{book.bcategory}</td>
        //         <td>{book.bauthor}</td>
        //         <td>
        //             {" "}
        //         <Button color="success" onClick={issuing}>Issue Book</Button>
        //         </td>
        //     </tr>
        // </tbody>

        // </table> */}

        // </div>




    )
    

    
};

export default Book;