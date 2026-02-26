import { useContext } from "react";

import { TodoValContext } from '../Context/TodoContext';

export const TodoInput = () => {
    const { todo, setTodo, text, setText } = useContext(TodoValContext);
    console.log(todo);

    const handleAdd = () => {
        const todoData = {
            id: todo.length + 1,
            text,
            isEdit: false,
            isCompleted: false,
        };
        setTodo((prev) => [...prev, todoData]);
    };
    return (
        <>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        </>
    )
}