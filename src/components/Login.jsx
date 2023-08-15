import { useState } from "react";
import LoginAsUser from "./LoginAsUser";
import Register from "./Register";
import '../css/Login.css'
import { useSelector } from "react-redux";

function Login() {
    const registration = useSelector(state => state.registration);
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <>
            <div className="Form">
                {
                    currentForm === "login" ? <LoginAsUser onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
                }
            </div>
        </>
    )
}

export default Login;
