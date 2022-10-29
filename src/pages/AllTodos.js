

export const AllTodos = ({_id, title, completed, createdAt, updatedAt}) => {


    return (
        <div className='todoList'>
            {completed}
            {title}
        </div>
    );
};
