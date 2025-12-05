let data;

const API = 'http://localhost:3001/todos';

function myTodosAdd(){
    const todoText = document.querySelector('#todos').value;
    console.log(todoText);

    console.log(data);

    if (todoText.trim()=='') return;

    let newTodos = {
        id: +data.length + 1,
        text: todoText,
        isEdit: false,
        isComplete: false,
    };

    fetch(API, {
        method: 'POST',
        header: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(newTodos),
    })

    .then((res) => console.log('this is from addTodo',res))
    .then(() => alert('data has been sent'))
    .catch((err) => console.log('this is from addTodo',err))
    .finally(() => console.log('done with api process'));
}

function fetchTodoDB(){
    fetch(API)
    .then((res) =>res.json())
    .then((res) =>(data = [...res]))
    .catch((err) => console.log(err));
}