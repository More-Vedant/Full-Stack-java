import { createContext, useState } from 'react';

export const TodoContext = createContext(null);

export const TodosContext = ({ children }) => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
    return (
        <TodoValContext.Provider value={{ text, todo, setText, setTodo }}>
            {children}
        </TodoValContext.Provider>
    );
};