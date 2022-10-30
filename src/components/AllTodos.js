import axios from "axios";
import { useState } from "react";
import { DeleteButton, TodoList } from "./Style.js";

const localhost = 'http://localhost:3000/todos'

export const AllTodos = ({ _id, title, completed, createdAt, updatedAt, doneTask, removeItem }) => {


    return (
        <TodoList>
            <input type="checkbox" defaultChecked={completed} onClick={() => doneTask(_id)} />
            {title}
            <DeleteButton onClick={() => removeItem(_id)}>x</DeleteButton>
        </TodoList>
    );
};
