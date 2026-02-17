import { CustomForm } from './CustomForm'

export const form = () => {
    const style = { display: "flex", alignItems: "start", flexDirection: "column", gap: "10px", width: "30%", margin: "auto" }
    
    const dataForm = [
        { id: "email", type: "email", placeholder: "Enter your Email", name: "email"},
        { id: "password", type: "password", placeholder: "Enter your Password", name: "password"},
        { id: "phone", type: "tel", placeholder: "Enter your Phone Number", name: "phone"},
        { id: "address", type: "textarea", placeholder: "Enter your Address", name: "address"},
        { id: "name", type: "text", placeholder: "Enter your Name", name: "name"},

    ]

    return (
        <CustomForm style={style} data={dataForm} />
    )
}