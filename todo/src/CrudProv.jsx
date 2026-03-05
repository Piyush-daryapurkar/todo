import axios from "axios";

const CrudApi = "http://localhost:3000/data"


export const GetCrud=async()=>{
    const response=await axios.get(CrudApi)
    return response.data
}


export const AddCrud=async(user)=>{
    const response = await axios.post(CrudApi,user)
    return response.data
}

