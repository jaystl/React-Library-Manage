import axios from "axios";
// import { getToken } from "../auth/indexD";



//for Staff
export const S_BASE_URL = 'http://localhost:9091' ;

export const myAxiosS = axios.create({
    baseURL:S_BASE_URL
}) ;



//for USer
export const U_BASE_URL = 'http://localhost:9090' ;

export const myAxiosU = axios.create({
    baseURL:U_BASE_URL
}) ;


 //for book
 export const B_BASE_URL = 'http://localhost:9092' ;

 export const myAxiosB = axios.create({
     baseURL:B_BASE_URL
 }) ;
 //cart
 export const C_BASE_URL = 'http://localhost:9093' ;

 export const myAxiosC = axios.create({
     baseURL:C_BASE_URL
 }) ;