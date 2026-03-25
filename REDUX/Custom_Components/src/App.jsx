import {Button} from '../Components/button';
import {form} from '../Components/form';

export const App = () => {
    const formData = [
        {
            type: 'text',
            name: 'userName',
            placeholder: 'enter your name....',
            id: 'username',
        },
        {
            type: 'email',
            name: 'userEmail',
            placeholder: 'enter your email....',
            id: 'useremail',
        },
        {
            type: 'password',
            name: 'userPassword',
            placeholder: 'enter your password....',
            id: 'userpassword',
        },
        {
            type: 'textArea',
            name: 'userAddress',
            placeholder: 'enter your address....',
            id: 'useraddress',
        },
        {
            type: 'tel',
            name: 'userPhone',
            placeholder: 'enter your phone....',
            id: 'userphone'
        },
    ]
}