import { AllTodos } from "../components/";
import React, { useEffect, useState } from "react";
import axios from "axios";

const localhost = 'http://localhost:3000/todos'

export const HomePage = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {

        const { data } = await axios.get(localhost);
        setTodos(data);
    };

    const [task, setTask] = useState('')
    const addTask = () => {
        axios.post(localhost, { title: task })
    }

    useEffect(() => {
        getTodos();
        setTask()
    }, []);
    return (
        <div>
            <input type="text" onChange={(event) => { setTask(event.target.value) }} />
            <button onClick={addTask}>Add</button>
            {todos.map((todo) => (
                <AllTodos key={todo._id} {...todo} />
            ))}
        </div>
    )
}
