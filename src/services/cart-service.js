import { myAxiosC } from "./helper";

//
export const createPost=(postData)=>
{
    return myAxiosC.post('/library/cart/',postData).then(response=>response.data)
}

//get all books of the user
export const showallpost=(data)=>
{
    return myAxiosC.get(`/library/cart/user/${data}`).then(response=>response.data)
}

// for Deleteing the book
export const deleteUserBook=(data)=>
{
    return myAxiosC.delete(`/library/cart/${data}`).then(response=>response.data)
}