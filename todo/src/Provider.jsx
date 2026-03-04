import axios from "axios";

const API="http://localhost:3000/todos";


export const Get=async()=>{
    const response=await axios.get(API)
    return response.data;
}


export const adduser=async(user)=>{
    const response=await axios.post(API,user)
    return response.data
}