import React from "react";
import { useEffect } from "react";
import{useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify' ;
import {Button,Card,CardBody,Container,Form,FormGroup,Input,Label} from "reactstrap";
import { createPost as doCreatePost } from "../services/s-user-service";
import { loadAllBooks } from "../services/u-user-service";
//import { addBook as doCreatePost } from "../services/s-user-service";

const AddnewBook=()=>{
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
    btitle:'',
    bauthor:'',
    bcategory:'',
    bdesc:'',
})

// function getCurrentDate(separator='-'){

//     let newDate = new Date()
//     let date = newDate.getDate();
//     let month = newDate.getMonth() + 1;
//     let year = newDate.getFullYear();
    
//     return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
// }

const fieldChanged=(event)=>
{
    setPost({...post,[event.target.name]:event.target.value})
}


const resetData=()=>
{
    setPost({
        btitle:'',
        bauthor:'',
        bcategory:'',
        bdesc:'',
       
    })
}

    //adding new book
    const createPost=(event)=>{

        event.preventDefault() ;
        // console.log(post)

        if(post.btitle.trim()==='') {
            alert("Book Title is Required !!!")
            return
        }

        if(post.bauthor.trim()==='') {
            alert("Book Author is Required !!!")
            return
        }
        
        if(post.bcategory.trim()==='') {
            alert("Book Category is Required !!!")
            return
        }


        if(post.bdesc.trim()==='') {
            alert("Please Enter The Book Description!!!")
            return
        }

    
        //submitting details 
         doCreatePost(post).then((data)=>{
                 toast.success("Proceeding  to Booklist")
                 navigate('/staff/Booklists')
                 // console.log(post)
         }).catch((error) => {
             alert("Error!!! something went wrong")
             console.log(error)
         })
        
}

    return(
        <div className="wrapper" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "red"
          }}
        >


            <Card outline color="dark" style={{flex:1, backgroundColor:'beige', width: '32rem'}}>

                <CardBody>
{/* {JSON.stringify(post)} */}
                      <Form onSubmit={createPost}>
                    <h3 className="text6">Fill Details</h3>
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
                            <Label for="bauthor">Enter Book author</Label>
                            <Input 
                            type="String" 
                            id="bauthor"
                            min='0'
                            placeholder="Enter Book Author"
                            name="bauthor"
                            onChange={fieldChanged}
                            />
                            </div>
                            <div className="my-3">
                            <Label for="b">Enter Book Category</Label>
                            <Input 
                            type="String" 
                            id="bcategory"
                            min='0'
                            placeholder="Enter Book Category"
                            name="bcategory"
                            onChange={fieldChanged}
                            />
                            </div>
                            <div className="my-3">
                            <Label for="bdesc">Enter Book Description</Label>
                            <Input 
                            type="String" 
                            id="bdesc"
                            min='0'
                            placeholder="Enter Book Description"
                            name="bdesc"
                            onChange={fieldChanged}
                            />
                            </div>



                        <Container className="text-center">
                            
                            <Button className="ms-2" type="submit" color="success">Add Book</Button>
                            <Button onClick={resetData} className="ms-2" color="secondary">Reset Content</Button>
                        </Container>

                    </Form>
                
                </CardBody>

            </Card>

        </div>
    )         
}

 export default AddnewBook;
