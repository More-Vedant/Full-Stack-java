import React, { useContext } from 'react';
import { TododsValContext } from '../Context/TodoContext';

import * as Types from '../Reducer/Action';

export const TodoList = () => {
    const { todo } = useContext(TododsValContext);
    console.log(todo);

    const handleEdits = (id) => {
        dispatch({ type: Types.EDITS_TODO_ITEMS, payload: id});
    };
    const handleDelete = (id) => {
        dispatch({ type: Types.DELETE_TODO_ITEMS, payload: id});
    };

    return (
        <>
        {todo.length > 0 &&
            todo.map((items) => {
                return (
                    <div
                    key={items.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                    >
                        <input type="checkbox" />
                        <h3>
                            {items.id} - {items.text}
                        </h3>
                        <h4>{items.isEdit ? 'true' : 'false'}</h4>
                        <button
                            onClick={() => {
                                handleEdits(items.id);
                            }}
                            >
                                edit
                            </button>
                            <button
                                onClick={() => {
                                    handleDelete(items.id);
                                }}
                                >
                                    delete
                                </button>
                    </div>
                );
            })}
        </>
    );
};