import React from 'react';
import { Todos } from './Todo'; 

export const TodoInput = () => {
    const [text, setText] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const handleAdd = () => {
        if (text.trim() == '') return;

        const data = {
            id: Date.now(),
            text,
            isEdits: false,
            isCompleted: false,
        };

        setTodo((prev) => [...prev, data]);
        console.log(todo);
    };

    console.log(todo);

    return (
        <>
        <input type="text" onChange={(el) => setText(el.target.value)}
        />
            <button onClick={handleAdd}>Add</button>
            <Todos props={{ todo }} />
        </>
    );
};