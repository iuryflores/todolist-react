import { DeleteButton, TodoList } from "./Style.js";

export const AllTodos = ({ _id, title, completed, createdAt, updatedAt }) => {


    return (
        <TodoList>
            <input type="checkbox" defaultChecked={completed} />
            {title}
            <DeleteButton>x</DeleteButton>
        </TodoList>
    );
};
