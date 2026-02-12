import { useState } from 'react';

export const Todos = ({ props }) => {
  const [editText, setEditText] = useState('');

  const { todo, setTodo } = props;

  const handleDelete = (id) => {
    const deleteItems = todo.filter((el) => el.id !== id);
    setTodo(deleteItems);
  };

  const handleEdit = (id) => {
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: true } : el
    );
    setTodo(editItems);
  };

  const handleCancel = (id) => {
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: false } : el
    );
    setTodo(editItems);
  };

  const handleConfirm = (id) => {
    if (editText.trim() === '') return;

    const editItems = todo.map((el) =>
      el.id === id
        ? { ...el, isEdit: false, text: editText }
        : el
    );

    setTodo(editItems);
  };

  const handleToggle = (id) => {
    const updated = todo.map((el) =>
      el.id === id
        ? { ...el, isCompleted: !el.isCompleted }
        : el
    );
    setTodo(updated);
  };

  const handleSelectAll = () => {
    const allSelected =
      todo.length > 0 && todo.every((el) => el.isCompleted);

    const updated = todo.map((el) => ({
      ...el,
      isCompleted: !allSelected,
    }));

    setTodo(updated);
  };

  
  const handleDeleteAll = () => {
    const remainingTodos = todo.filter(
      (el) => !el.isCompleted
    );
    setTodo(remainingTodos);
  };

  return (
    <>
      <h1>list of todos</h1>

      <button onClick={handleSelectAll}>
        {todo.length > 0 && todo.every((el) => el.isCompleted)
          ? 'Unselect All'
          : 'Select All'}
      </button>

      
      <button onClick={handleDeleteAll}>
        Delete Selected
      </button>

      {todo.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              width: '80%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <input
              type="checkbox"
              checked={Boolean(el.isCompleted)}
              onChange={() => handleToggle(el.id)}
            />

            {el.isEdit ? (
              <input
                name="edit_items"
                type="text"
                defaultValue={el.text}
                onChange={(e) =>
                  setEditText(e.target.value)
                }
              />
            ) : (
              <h1
                style={{
                  textDecoration: el.isCompleted
                    ? 'line-through'
                    : 'none',
                }}
              >
                {el.text}
              </h1>
            )}

            {el.isEdit ? (
              <>
                <button
                  onClick={() => handleCancel(el.id)}
                >
                  cancel
                </button>
                <button
                  onClick={() => handleConfirm(el.id)}
                >
                  confirm
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(el.id)}
                >
                  edit
                </button>
                <button
                  onClick={() => handleDelete(el.id)}
                >
                  delete
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
