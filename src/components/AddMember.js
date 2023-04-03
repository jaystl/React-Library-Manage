import React from "react";
import { useEffect } from "react";
import{useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify' ;
import {Button,Card,CardBody,Container,Form,FormGroup,Input,Label} from "reactstrap";
import { createUser as doCreatePost } from "../services/s-user-service";
import { loadAllUsers } from "../services/s-user-service";


const AddMember=()=>{
let navigate=useNavigate();

const[members,setMembers]=useState([]);
useEffect(
()=>{

    loadAllUsers().then((data)=>{
        console.log(data)
        setMembers(data)
    }).catch(error=>{

        console.log(error)
    })
},[]
)

const[post,setPost]=useState({
     uname:'',
     email:'',
     upassword:'',
     
})


const fieldChanged=(event)=>
{
    setPost({...post,[event.target.name]:event.target.value})
}


const resetData=()=>
{
    setPost({
     
        uname:'',
        upassword:'',
        email:''
    })
}

    //Adding a new member
    const createUser=(event)=>{

        event.preventDefault() ;
        // console.log(post)

        if(post.uname.trim()==='') {
            alert("User name is Required !!!")
            return
        }

        if(post.email.trim()==='') {
            alert("user email is Required !!!")
            return
        }
        
        if(post.upassword.trim()==='') {
            alert("password is Required !!!")
            return
        }
    
        //submitting details on server
         doCreatePost(post).then((data)=>{
                 toast.success("Proceeding  to MemberList")
                 navigate('/staff/memberlist')
                 // console.log(post)
         }).catch((error) => {
             alert("Error!!! something went wrong")
             console.log(error)
         })
        
}

    return(
        <div className="wrapper"
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "red"
          }}>

            <Card outline color="dark" style={{flex:1, backgroundColor:'beige', width: '30rem'}}>

                <CardBody>
{/* {JSON.stringify(post)} */}
                    <h3>Fill Details For Members</h3>

                    <Form onSubmit={createUser}>
                        <div className="my-3">
                            <Label for="email">Enter User email</Label>
                            <Input 
                            type="email" 
                            id="email"
                            min='0'
                            placeholder="abcd@gmail.com "
                            name="email"
                            onChange={fieldChanged}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="uname">Enter Username</Label>
                            <Input 
                            type="text" 
                            id="uname"
                            min='0'
                            placeholder="Enter User name"
                            name="uname"
                            onChange={fieldChanged}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="btitle">Enter Userpassword</Label>
                            <Input 
                            type="password" 
                            id="upassword"
                            min='0'
                            placeholder="Enter user Password"
                            name="upassword"
                            onChange={fieldChanged}
                            />
                            </div>

                        <Container className="text-center">
                            {/* <Button onClick={payment} color="warning">Pay</Button> */}
                            <Button className="ms-2" type="submit" color="primary">Add Member</Button>
                            <Button onClick={resetData} className="ms-2" color="danger">Reset Content</Button>
                        </Container>

                    </Form>
                
                </CardBody>

            </Card>

        </div>
    )         
}

 export default AddMember;
