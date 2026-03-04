import axios from "axios";

const API="http://localhost:3000/todos";


export const Get=async()=>{
    const response=await axios.get(API)
    return response.data
}


export const Set=async()={
    const response=await axios.post(API)
}