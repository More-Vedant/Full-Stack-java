import { memo } from 'react';

const expensiveFunction = (value) => {
  const startTime = Date.now();
  /*   setTimeout(() => {
    const endTime = Date.now();
    console.log('🚀 ~ startTime:', startTime);
    console.log('🚀 ~ endTime:', endTime);

    let calculation = endTime - startTime;
    console.log(
      '🚀 ~ calculation:',
      calculation,
      'the final value',
      calculation <= value,
    );
  }, 100); */

  while (Date.now() - startTime <= value) {
    continue;
  }

  return true;
};

const TodoList = ({ todo, handleDelete, handleEdits }) => {
  expensiveFunction(200);
  return (
    <>
      {todo &&
        todo.map((el) => {
          return (
            <div
              key={el.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '1rem auto',
                gap: '0.5rem',
              }}
            >
              <input type="checkbox" />
              <h3>{el.text}</h3>
              <button onClick={() => handleEdits}>edit</button>
              <button onClick={() => handleDelete}>delete</button>
            </div>
          );
        })}
    </>
  );
};

const expensiveCalculationFunc = (prevValue, currValue) => {
  return (
    prevValue.todo.length === currValue.todo.length &&
    prevValue.todo.map(
      (el, index) => el.isEdits !== currValue.todo[index].isEdits,
    )
  );
};

export const TodoLists = memo(TodoList, expensiveCalculationFunc);
