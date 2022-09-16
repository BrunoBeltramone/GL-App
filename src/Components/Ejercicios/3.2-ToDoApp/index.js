import React, { useEffect, useState } from 'react'

const todoArray = [
    {
        id: 1,
        descripcion: "Ir al Super",
        completed: false
    },
    {
        id: 2,
        descripcion: "Lavar el Auto",
        completed: false
    },
    {
        id: 3,
        descripcion: "Estudiar curso Udemy",
        completed: false
    },
    {
        id: 4,
        descripcion: "Pasear al Perro",
        completed: false
    }
]

const ToDoApp = () => {

    const [item, setItem] = useState(0)

    const handleClick = (e) => {
        setItem(e)
        const it = todoArray.find(i => i.id === e.target.value)
        console.log(it)
        it && (it.completed = !it.completed)
        setItem(5)
    }

    useEffect (() => {
        console.log("hola")
    }, [item])

  return (
    <>
    <div>ToDoApp</div>
    <ul>
    {
        todoArray.map(i => (
            <li value={i.id} key={i.id} style={{textDecoration: i.completed ? "line-through" : ""}} onClick={handleClick}>{i.descripcion}</li>
            ))
        }
    </ul>
    </>
  )
}

export default ToDoApp