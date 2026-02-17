import { useState } from 'react';
import PropTypes from 'prop-types';

export const CustomForm = ({ style, data}) => {
    console.log(data);
    const [formData, setFormData] = useState(() => {
        return data.reduce((acc, curr) => {
            acc[curr.name] = ""
            return acc
    },{})
    });

    const handleChange = (e) => {
        let { name, value } = e.target;

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        func(formData)
    }
    
    
    console.log(formData);
    return (
        <form action="" style={style}>

            {
                data.map((item, index) => {
                    return (<div key={index}>
                        <label htmlFor={items.id}>{items.name}</label>
                        <input id={items.id} types={items.type} placeholder={items.placeholder} name={items.name} />
                        </div>)
                })
            }
            <button>Submit/Register</button>
        </form>
    )
}