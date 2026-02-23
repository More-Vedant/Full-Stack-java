import React from "react";
import { getData } from '../Api/'

export const User = () => {
    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        getData('users')
        .then((res) => {
            console.log(res);
            return setUser(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    console.log(user);

    return (
        <>
        <h1>User</h1>

        {user &&
        user.map((items) => {
            return (
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
                key={items.id}
                >
                    <img src={items.avatar} alt={items.first_name}/>
                    <span>{items.id}</span>
                    <span>{items.email}</span>
                    <p>
                        name {items.first_name} - {items.last_name}
                    </p>
                </div>
            );
        })}
        
        </>
    );
};