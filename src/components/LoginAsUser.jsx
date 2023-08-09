import React, { useState } from "react";
import Switch from "react-switch";

function LoginAsUser(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loginOption, setLoginOption] = useState("user");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log("Login option:", loginOption);
    };

    const handleOptionChange = (checked) => {
        setLoginOption(checked ? "admin" : "user");
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <>
            <div className="d-flex justify-content-center pb-5" style={{
                maxWidth: "1000px",
                margin: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
            }}>
                <div className="auth-form-container" style={{ marginTop: "2vh" }}>
                    <img src="/logo.png" alt="logo" style={{ width: "50%", minWidth: "200px", marginTop: "5vh" }} />
                    <div className="toggle-container">
                        <label htmlFor="loginSwitch">
                            <Switch
                                id="loginSwitch"
                                onChange={handleOptionChange}
                                checked={loginOption === "admin"}
                                offColor="#adb5bd"
                                onColor="#adb5bd"
                                offHandleColor="#f8f9fa"
                                onHandleColor="#f8f9fa"
                                handleDiameter={22}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={24}
                                width={48}
                            />
                        </label>
                        <span style={{ color: "#293D76", marginLeft: "10px" }}>
                            {loginOption === "admin" ? "Login as Admin" : "Login as Guest"}
                        </span>
                    </div>
                    <br />
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label style={{ color: "#293D76" }} htmlFor="email">Email</label>
                        <div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="email"
                                id="email"
                                name="email"
                                style={{
                                    width: "50%",
                                    height: "40px",
                                    color: "#293D76",
                                    border: "1px solid #293D76",
                                    borderRadius: "5px",
                                    paddingLeft: "10px",
                                }}
                                required
                            />
                        </div>
                        <label style={{ color: "#293D76" }} htmlFor="password">Password</label>
                        <div style={{ position: "relative" }}>
                            <input
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                id="password"
                                name="password"
                                style={{
                                    width: "50%",
                                    height: "40px",
                                    color: "#293D76",
                                    border: "1px solid #293D76",
                                    borderRadius: "5px",
                                    paddingLeft: "10px",
                                }}
                                required
                            />
                            <span
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    right: "27%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    color: "#293D76",
                                }}
                                onClick={toggleShowPassword}
                            >
                                {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </span>
                        </div>

                        <p style={{ color: "#293D76", fontSize: "12px" }}>Forgot password?</p>
                        <button className="btn btn-light login-button" type="submit">Log In</button>
                    </form>
                    <button className="Link-btn" style={{ width: "100%", fontSize: "14px", marginTop: "10px" }} onClick={() => props.onFormSwitch('register')}>Don't have an account yet? Sign Up.</button>
                </div>
            </div>    
        </>
    );
}

export default LoginAsUser;
