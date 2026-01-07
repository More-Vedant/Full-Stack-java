// npx json-server --watch ToDoDB.json --port 3001 //

let data = [];

const API = 'http://localhost:3001/todos';

function myTodosAdd() {
    const todoText = document.querySelector('#todos').value;
    console.log(todoText);

    console.log(data);

    if (todoText.trim() == '') return;

    let newTodos = {
        id: data.length + 1 + '',
        text: todoText,
        isEdit: false,
        isComplete: false,
    };

    fetch(API, {
        method: 'POST',
        header: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newTodos),
    })

        .then((res) => console.log('this is from addTodo', res))
        .then(() => alert('data has been sent'))
        .catch((err) => console.log('this is from addTodo', err))
        .finally(() => console.log('done with api process'));
}

function fetchToDoDB() {
    fetch(API)
        .then((res) => res.json())
        .then((res) => data = res)
        .catch((err) => console.log(err))
        .finally(() => UIrender());
}

function UIrender() {
    const mainContainer = document.querySelector('#dataInfo');
    mainContainer.innerHTML = "";
    if (data.length === 0) {
        mainContainer.append('no data');
        return;
    }

    const select = document.getElementById('selectAll')
    select.innerText = "Select All";

    const deselect = document.getElementById('DeSelectAll')
    deselect.innerText = "De Select All";

    select.addEventListener('click', () => {
        document.querySelectorAll('.todoCheckbox').forEach(cb => cb.checked = true);
    });

    
    deselect.addEventListener('click', () => {
        document.querySelectorAll('.todoCheckbox').forEach(cb => cb.checked = false);
    });


    data &&
        data.map((el) => {
            const todoDiv = document.createElement('div');
            const checkInput = document.createElement('input')
            const headingText = document.createElement('h2')
            const statusTodo = document.createElement('h3')
            const editBtn = document.createElement('button')
            const deleteBtn = document.createElement('button')
            const id = document.createElement('p')

            id.innerText = el.id;
            todoDiv.className = 'myTodo_Div';
            checkInput.type = 'checkbox'
            checkInput.className = 'todoCheckbox'
            headingText.innerText = el.text;
            statusTodo.innerText = el.isEdit ? 'true' : 'false';
            editBtn.innerText = 'edit'
            deleteBtn.innerText = 'delete'



            editBtn.addEventListener('click', async () => {
                await fetch(`${API}/${el.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ isEdit: !el.isEdit }),
                })
            })


            deleteBtn.addEventListener('click', async () => {
                await fetch(`${API}/${el.id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                })

            })
            todoDiv.append(id, checkInput, headingText, editBtn, deleteBtn, statusTodo)
            mainContainer.append(todoDiv)
        })

}
