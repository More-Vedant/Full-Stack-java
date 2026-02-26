import React, { useContext } from 'react';
import { TododsValContext } from '../Context/TodoContext';

export const TodoList = () => {
    const { todo } = useContext(TododsValContext);
    console.log(todo);

    return <div>TodoList</div>;
};