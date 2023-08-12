import React, { useState } from "react";
import LoginAsUser from "../components/LoginAsUser";
import Register from "../components/Register";
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
                {registration.error && <p style={{ color: 'red' }}>Registration Error: {registration.error}</p>}
                {registration.loading && <p>Loading...</p>}
                {registration.success && <p>Registration successful!</p>}
            </div>
        </>
    )
}

export default Login;
