import React, { useEffect, useState } from 'react'
import { GetCrud , AddCrud} from './CrudProv'

const Crud = () => {

    const [crud,setcrud]=useState([])
    const [name,setname]=useState("")
    const [age,setage]=useState("")
    const [password,setpassword]=useState("")


    useEffect(()=>{
        const fetchdata=async()=>{
            const data = await GetCrud()
            setcrud(data)
        }
        fetchdata()
    },[])

    const haldledata=async()=>{
        if (name&&age&&password){
            const newdata= {name,age,password}
            const adddata=await AddCrud(newdata)

            setcrud((prev)=>[...prev,adddata])

            setname("");
            setage("");
            setpassword("");

        }else{
            alert("empty data")
        }
    }
  return (
    <>
    <h1>data</h1>

    <form action=" " >
    <thead >
        <th>name</th>
        <th>age</th>
        <th>Password</th>
    </thead>
       
        {
            crud.map((e)=>(
                <tbody >
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.password}</td>
                </tbody>

            ))
        }
    </form>

    <form action="">
        <input type="text" 
        placeholder='enter name'
        value={name}
        onChange={(e)=>{setname(e.target.value)}}
        /><br/>
         <input type="text" 
        placeholder='enter age'
        value={age}
        onChange={(e)=>{setage(e.target.value)}}
        /><br/>
         <input type="text" 
        placeholder='enter password'
        value={password}
        onChange={(e)=>{setpassword(e.target.value)}}
        /><br/>

        <button onClick={haldledata}>add</button>
    </form>

    </>
  )
}

export default Crud
