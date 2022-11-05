import { AllTodos } from "../components/";
import React, { useEffect, useState } from "react";
import axios from "axios";

const localhost = 'http://localhost:3000/todos'

export const HomePage = () => {
    const [todos, setTodos] = useState([])
    /*const [remove, setRemove] = useState()*/
    const [done, setDone] = useState()
    const [task, setTask] = useState('')
    const getTodos = async () => {

        const { data } = await axios.get(localhost);
        setTodos(data);
    };


    const addTask = () => {
        axios.post(localhost, { title: task })
        getTodos()
    }


    const removeItem = (id) => {
        axios.delete(`${localhost}/${id}`)
        getTodos()
    }

    const doneTask = (id) => {
        axios.put(`${localhost}/${id}`)
        setDone()
    }

    useEffect(() => {
        getTodos();
    }, [getTodos]);
    return (
        <div>
            <input type="text" onChange={(event) => { setTask(event.target.value) }} />
            <button onClick={() => addTask()}>Add</button>
            {todos.map((todo) => (
                <AllTodos key={todo._id} {...todo} doneTask={doneTask} removeItem={removeItem} />
            ))}
        </div>
    )
}
