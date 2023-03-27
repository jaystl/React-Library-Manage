import { myAxiosU } from "./helper";
import { myAxiosB } from "./helper";
export const signUpU = (user) => {

    return myAxiosU
                .post('/api/auth/registeruser', user)
                .then((response) => response.data)

}


export const loginU = (loginDetail) =>{
    return myAxiosU.post('/api/auth/login', loginDetail).then((response)=>response.data)
}


//to get all the books
 export const loadAllBooks = () => {
     return myAxiosB.get('/library/book/').then((response) => response.data)
}