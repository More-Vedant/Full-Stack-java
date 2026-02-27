import { createContext, useReducer, useState } from 'react';
import { Reducer } from '../Reducer/Reducer';

export const TodoContext = createContext(null);

export const TodosContext = ({ children }) => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
    const [state, dispatch] = useReducer(Reducer, todo);
    return (
        <TodoValContext.Provider value={{ text, todo, setText, setTodo, state, dispatch }}>
            {children}
        </TodoValContext.Provider>
    );
};