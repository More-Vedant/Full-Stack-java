import React from 'react';
import { AuthValContext } from '../Context/AuthProvider';

export const Login = () => {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');

    const { auth, setAuth } = React.useContext(AuthValContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' && pass.trim() === '') return;
        setAuth(true);
    };

    console.log(auth);

    return (
        <>
        <h1>Login</h1>
        <form 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '1rem',
        }}
        onSubmit={handleSubmit}
        </>
    )
}