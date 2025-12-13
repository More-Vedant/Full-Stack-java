

const storeData = JSON.parse(localStorage.getItem('userData'));

const Login = () => {
  let userName = document.getElementById('loginUsername').value.trim();
  console.log('🚀 ~ userName:', userName);
  let password = document.getElementById('Loginpassword').value.trim();

  let findUser = storeData.find((el) => el.user === userName);

  if (findUser !== undefined) {
    if (findUser.pass !== password) {
      alert("password dosen't match!");
      return;
    }
    let random = function () {
      return Math.random().toString(36).substr(2);
    };

    let token = function () {
      return (
        random() + random() + random() + '-' + random() + random() + random()
      ); // to make it longer
    };

    sessionStorage.setItem('token', JSON.stringify(token()));

    setTimeout(() => {
      alert('token has been stored in session storage');
    }, 1000);
  }
  alert("user coudnt't found!");
};