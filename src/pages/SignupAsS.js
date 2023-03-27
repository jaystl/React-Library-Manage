import Base from "../components/Base"; 
import { Container, CardHeader, Card, CardBody, Label, Input, Form, FormGroup, Button } from "reactstrap"; 
import { useEffect, useState } from "react";
import { signUpS } from "../services/s-user-service";
import {toast} from 'react-toastify' ;


const SignupAsS = () => {


    const [data, setData] = useState({

        sname : '' ,
        email : '' ,
        spassword : '',
    

    })

    const [error, setError] = useState({
        errors : {},
        isError : false
    })


    //  useEffect(()=>{
    //      console.log(data)
    //  }, [data])

    //handle change 
    const handleChange = (event, property) => {
        
        //dynamically setting the values
        setData({...data, [property]:event.target.value})

    }

    //reset data
    const resetData = () => {
        setData({
            sname : '' ,
            email : '' ,
            spassword : '',
            
        })
    }

// submiting the form
     const submitForm=(event)=> {
        event.preventDefault()
    
         console.log(data)
        //data validation

        //call server api for sending the data
         signUpS(data).then((resp) =>{
            console.log(resp)
             console.log("success log")
            toast.success("Staff Is Registered Successfully !! Staff ID " + resp.sid)
             setData({
                 sname : '' ,
                 email : '' ,
                 spassword : '',
             })
         }).catch((error) => {
            console.log(error)
             console.log("Error log")
         });
        };
     

return (
        <Base>
            <Container>

                {/* {JSON.stringify(data)} */}

                <Card>
                    <CardHeader>
                        <h3>Hi Staff Member , Please fill your details to Register</h3>
                    </CardHeader>

                    <CardBody>

                        <Form onSubmit={submitForm}>
                            {/* name field */}
                            <FormGroup>
                                <Label for="sname">Enter Full Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter Here"
                                    id="name"
                                    onChange={(e) => handleChange(e, 'sname')}
                                    value={data.sname}
                                />
                             
                            </FormGroup>

                            {/* password field */}
                            <FormGroup>
                                <Label for="spassword">Enter Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter Here"
                                    onChange={(e) => handleChange(e, 'spassword')}
                                    value={data.spassword}
                                />

                            </FormGroup>

                            {/* email field */}
                            <FormGroup>
                                <Label for="email">Enter Email</Label>
                                <Input
                                    type="email"
                                    placeholder="abcd@gmail.com"
                                    onChange={(e) => handleChange(e, 'email')}
                                    value={data.email}
                                />

                            </FormGroup>
                            
                            <Container className="text-center">
                                <Button color="dark">Register</Button>
                                <Button onClick={resetData} className="ms-2" type="reset">Reset</Button>
                            </Container>

                        </Form>

                    </CardBody>

                </Card>
            </Container>
        </Base>
    );

};
export default SignupAsS;