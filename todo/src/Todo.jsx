import React, { useEffect, useState } from 'react'
import { Get } from './Provider'

export default function Todo() {

    const [GetData, setGetData] = useState([])

    useEffect(() => {

        const fetchUser = async () => {
            const list = await Get()
            setGetData(list)
        }
        fetchUser()

    }, [])

  return (
    <>
      <h1>Todo List</h1>

      {
        GetData.map((item, index) => (
          <h3 key={index}>{item.title}</h3>
        ))
      }
      enter title<input type="text" placeholder='enter title'  />


    </>
  )
}