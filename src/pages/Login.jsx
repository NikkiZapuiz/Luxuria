import { useState } from "react"
import LoginAsUser from "../components/LoginAsUser";
import Register from "../components/Register";
import '../css/Login.css'


function Login() {
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

export default Login