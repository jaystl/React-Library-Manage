import { myAxiosB, myAxiosS, myAxiosU } from "./helper";

export const signUpS = (user) => {

    return myAxiosS
                .post('/api/auth/registerstaff', user)
                .then((response) => response.data)

}


export const loginS = (loginDetail) =>{
    return myAxiosS.post('/api/auth/login', loginDetail).then((response)=>response.data)
}

export const deleteBook=(data)=>
{
    return myAxiosB.delete(`/library/book/${data}`).then(response=>response.data)
}

export const createPost=(postData)=>
{
    return myAxiosB.post('/library/book/',(postData)).then(response=>response.data)
}
//to get all the books
export const loadAllBooks = () => {
    return myAxiosB.get('/library/book/').then((response) => response.data)
}
//search by title
export const searchBook=(data)=>
{
    return myAxiosB.get(`/library/book/search/${data}`).then(response=>response.data)
}

export const loadAllUsers=()=>
{
    return myAxiosU.get('/library/user/').then((response)=>response.data)
}

export const createUser=(postData)=>
{
    return myAxiosU.post('/api/auth/registeruser',postData).then(response=>response.data);
}

export const deleteUser=(data)=>
{
    return myAxiosU.delete(`/library/user/${data}`).then(response=>response.data)
}

