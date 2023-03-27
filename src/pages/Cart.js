import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import { getCurrentUserDetail } from "../auth/indexS";
import Base from "../components/Base";
import Bookl from "../components/Bookl";
import { deleteUserBook, showallpost } from "../services/cart-service";
import {indexS} from "../auth/indexS";

const Cart=()=>
{


    const [data, setData] = useState() ;
    let navigate=useNavigate();

    useEffect(()=> {
        showallpost(getCurrentUserDetail().uid).then(data=> {
            console.log(data)
            setData([...data])
        })
        .catch(error => {
            console.log(error)
            toast.error("Error !!!")
        })
    }, [])


    function deletePost(post) {

        deleteUserBook(post.cid).then(res=>{
            console.log(res)
            toast.success("Book Removed Succesfully!!")
            navigate('/user/booklist')
        })
        .catch(error=>{
            console.log(error)
            toast.error("Error :(")
        })

    }


 return(
<Base>
<div>
<Container className="mt-3">
            <div className="container-fluid">
                <Row>
                    <Col md={
                        {
                            size:10,
                            offset:1
                        }
                    }>

                        <h1 className="heading"><center>The Number of Total Books : {data?.length}</center></h1>

                        

                        {
                            data?.map((book) => (
                                <Bookl book={book} key={book.cid} deletePost={deletePost}/>
                            ))
                        }

                    </Col>
                </Row>
            </div>

        </Container>

</div>
</Base>

 )

}

export default Cart;