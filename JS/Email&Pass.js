function myFunctions(e) {
    e.preventDefault();

    let email = document.myForm.emai.value;
    let pass = document.myForm.pass.value;
    console.log(pass);
    console.log(email);

    if (email.indexof('@') <= 0) {
        document.getElementById('Message').innerHTML = 'Invalid Email by @';
        return false;
    } 
    else if (
        email.charAt(email.length -4) != '.' &&
        email.charAt(email.length -3) != '.'
    ) {
        document.getElementById('Message').innerHTML = 'Invalid Email by .com/.in domain';
        return false;
    }

    if (pass != null) {
        if (pass.trim() == '') {
            console.log('Please Enter the Value..');
        }
        else if (pass.length < 8 || pass.length > 20) {
            console.log('Please Enter the Correct Length..');
        }
        else {
            const hasUpperCase = /[A-Z]/.test(pass);
            const hasLowerCase = /[a-z]/.test(pass);
            const hasNumber = /[0-9]/.test(pass);
            const hasSpecialChar = /[!@#$%^&*(),.\?:{}|<>]/.test(pass);


            if (!hasUpperCase) {
                console.log('Password must include at least one upper case letter..');
            }
            else if (!hasLowerCase) {
                console.log('Password must include at least one lower case letter..');
            }
            else if (!hasNumber) {
                console.log('Passowrd must include at least one number..');
            }
            else if (!hasSpecialChar) {
                console.log('Password must include at least one special character');
            }
            else {
                console.log('password is valid..');
            }
        }
    }
}