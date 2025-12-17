const storeData = JSON.parse(localStorage.getItem('userData')) || [];

const signUp = () => {
    let userName = document.getElementById('signUsername').value.trim();
    console.log(userName);
    let age = document.getElementById('SignAge').value.trim();
    console.log(age);
    let password = document.getElementById('signPassword').value.trim();
    console.log(password);

    let singlePersonData = {
        user: userName,
        age,
        pass: password,
    };
    storeData.push(singlePersonData);

    localStorage.setItem('userData', JSON.stringify(storeData));

    setTimeout(() => {
        alert('data saved sucessfully');
        window.location = '';
    }, 100);
};