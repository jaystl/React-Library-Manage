import React from "react";
import { useEffect } from "react";
import{useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify' ;
import {Button,Card,CardBody,Container,Form,FormGroup,Input,Label} from "reactstrap";
import { createPost as doCreatePost } from "../services/cart-service";
import { loadAllBooks } from "../services/u-user-service";
import { getCurrentUserDetail } from "../auth/indexS";
import moment from "moment";

const IssueBook=()=>{
let navigate=useNavigate();

const[books,setBooks]=useState([]);
useEffect(
()=>{

    loadAllBooks().then((data)=>{
        console.log(data)
        setBooks(data)
    }).catch(error=>{

        console.log(error)
    })
},[]
)

const[post,setPost]=useState({
     bid:'',
     uid:'',
     btitle:'',
     issuedate:'',
     expirydate:''
})

function getCurrentDate(){

    let newDate = new Date()
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    
    let date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
    return moment({date}).utc().format('YYYY-MM-DD')
}

const fieldChanged=(event)=>
{
    setPost({...post,[event.target.name]:event.target.value})
}


const resetData=()=>
{
    setPost({
        uid:'',
        bid:'',
        btitle:'',
        issuedate:'',
        expirydate:''
    })
}

    //booking appointment fuction
    const createPost=(event)=>{

        event.preventDefault() ;
        // console.log(post)

        if(post.bid.trim()==='') {
            alert("Book ID is Required !!!")
            return
        }

        if(post.uid.trim()==='') {
            alert("user ID is Required !!!")
            return
        }
        
        if(post.btitle.trim()==='') {
            alert("book title is Required !!!")
            return
        }


        if(post.issuedate.trim()==='') {
            alert("Please Enter The Issue Date !!!")
            return
        }

        if(post.expirydate.trim()==='') {
           
            alert("Enter the expirydate!!!")
            return
        }
    
        //submitting  details on server
         doCreatePost(post).then((data)=>{
            {
                 toast.success("Book Issued Succesfully")
                 navigate('/user/afterissue')}
                 // console.log(post)
         }).catch((error) => {
             alert("Error!!! something went wrong!!check wether  issue date is occuring before expiry date!")
             console.log(error)
         })
        
}

    return(
        <div className="wrapper">

            <Card>

                <CardBody>
{/* {JSON.stringify(post)} */}
                    <h3>Fill All the Details for issuing a book</h3>

                    <Form onSubmit={createPost}>
                        <div className="my-3">
                            <Label for="uid">Enter User ID</Label>
                            <Input 
                            type="number" 
                            id="uid"
                            min='0'
                            placeholder="Enter User's ID"
                            name="uid"
                            onChange={fieldChanged}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="bid">Enter Book ID</Label>
                            <Input 
                            type="number" 
                            id="bid"
                            min='0'
                            placeholder="Enter Book ID"
                            name="bid"
                            onChange={fieldChanged}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="btitle">Enter Book title</Label>
                            <Input 
                            type="String" 
                            id="btitle"
                            min='0'
                            placeholder="Enter Book Title"
                            name="btitle"
                            onChange={fieldChanged}
                            />
                            </div>

                        <div className="my-3">
                            <Label for="date">Enter Issuing Date</Label>
                            <Input 
                            type="date" 
                            id="idate"
                            min={getCurrentDate()}
                            placeholder="yyyy-mm-dd"
                            name="issuedate"
                            onChange={fieldChanged}
                            />
                        </div>

                        <div className="my-3">
                            <Label for="date">Enter Expiry Date</Label>
                            <Input 
                            type="date" 
                            id="edate"
                            min={getCurrentDate()}
                            placeholder="yyyy-mm-dd"
                            name="expirydate"
                            onChange={fieldChanged}
                            />
                    
                            
                        </div>

                        <Container className="text-center">
                            {/* <Button onClick={payment} color="warning">Pay</Button> */}
                            <Button className="ms-2" type="submit" color="primary">Issue Book</Button>
                            <Button onClick={resetData} className="ms-2" color="danger">Reset Content</Button>
                        </Container>

                    </Form>
                
                </CardBody>

            </Card>

        </div>
    )         
}

 export default IssueBook;
