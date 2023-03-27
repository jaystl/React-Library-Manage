import React, { useEffect, useState } from 'react'
import Base from "./Base"
import { deleteUser, loadAllUsers } from '../services/s-user-service'
import {Row, Col, Container,Button} from 'reactstrap' 
import {useNavigate} from 'react-router-dom'
import Member from './Member'
import {toast} from 'react-toastify';
import '../css/headings.css'


function MemberList() {


    const [data, setdata] = useState()
    let navigate=useNavigate();


    useEffect(() => {

        //load all the post from server
        loadAllUsers().then((data) => {
            console.log(data)
            setdata(data)
        }).catch(error=>{
            console.log(error)
        })

    }, [])

    function deletePost(post) {

        deleteUser(post.uid).then(res=>{
            console.log(res)
            toast.success("User Removed Succesfully!!")
            navigate('/staff/aftermemdel')
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
                        <center></center> 
                        <h1 className="heading"><center>The Number of Total Members : {data?.length}</center></h1>
                        <Button color="success" onClick={()=> navigate("/staff/addmember")}>Add Member</Button> <t/>
                        <Button color="primary" fixed="center" onClick={()=> navigate("/staff/booklists")}>Back to BookList</Button>
                         
                        

                        {
                            data?.map((member) => (
                                <Member member={member} key={member.uid} deletePost={deletePost}/>
                            ))
                        }

                    </Col>
                </Row>
            </div>

        </Container>
        </Base>

    )
}


export default MemberList ;