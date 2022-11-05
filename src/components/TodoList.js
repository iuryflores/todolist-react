import { DeleteButton, TodoList } from "./Style.js";

export const AllTodos = ({ _id, title, completed, doneTask, removeItem }) => {

    return (
        <TodoList>
            <input type="checkbox" defaultChecked={completed} onClick={() => doneTask(_id)} />
            {title}
            <DeleteButton onClick={() => removeItem(_id)}>x</DeleteButton>
        </TodoList>
    );
};
