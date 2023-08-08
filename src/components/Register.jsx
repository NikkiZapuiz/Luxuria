import { useState } from "react"

function Register(props) {
    const [email, setEmai] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.perventDefault();
        console.log(email);

    }

    return (
        <>

            <div className="auth-form-container">
                <h2 className="login-color">Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label>Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full Name" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmai(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="login-btn" type="submit">Submit</button>
                </form>
                <button className="Link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login.</button>
            </div>

        </>
    )
}

export default Register