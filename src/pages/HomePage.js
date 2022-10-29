import { AllTodos } from "./AllTodos";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {

        const { data } = await axios.get(
            'http://localhost:3000/todos'
        );
        setTodos(data);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>


            {todos.map((todo) => (
                <AllTodos key={todo._id} {...todo} />
            ))}


        </div>
    )
}
