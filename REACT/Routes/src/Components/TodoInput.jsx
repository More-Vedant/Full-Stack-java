import { useContext, useEffect } from "react";

import { TodoValContext } from '../Context/TodoContext';
import * as types from '../Reducer/Action';

export const TodoInput = () => {
    const { setTodo, text, setText, state, dispatch } = useContext(TodoValContext);
    console.log(todo);

    const handleAdd = () => {
        dispatch({ payload: text, type: types.ADD_TODO_ITEMS});
    };
    
    useEffect(() => {
        setTodo(state);
    }, [state]);

    return (
        <>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>add</button>
        </>
    );
};