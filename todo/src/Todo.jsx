import React, { useEffect, useState } from 'react'
import { Get, adduser } from './Provider'

export default function Todo() {

  const [GetData, setGetData] = useState([])
  const [addTask, setaddTask] = useState("")

  useEffect(() => {

    const fetchUser = async () => {
      const list = await Get()
      setGetData(list)
    }

    fetchUser()

  }, [])

  const handleTask = async (e) => {
    e.preventDefault()

    if (addTask) {
      const newTask = { name: addTask }
      const task = await adduser(newTask)

      // add new task to UI
      setGetData((prev) => [...prev, task])

      // clear input
      setaddTask("")
    } 
    else {
      alert("Fill the input")
    }
  }

  return (
    <>
      <h1>Todo List</h1>

      {
        GetData.map((item, index) => (
          <h3 key={index}>{item.name}</h3>
        ))
      }

      <form onSubmit={handleTask}>
        <input 
          type="text" 
          value={addTask} 
          onChange={(e) => setaddTask(e.target.value)} 
          placeholder='Enter task'
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  )
}