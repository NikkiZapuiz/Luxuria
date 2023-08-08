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
        <div className="main container d-flex justify-content-center align-items-center">
            <div className="row p-3" style={{
                maxWidth: "1000px",
                margin: "auto",
                // backgroundColor: "rgba(255, 255, 255, 0.15)",
                // backdropFilter: "blur(1px)",
                // borderRadius: "10px",
                // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)",
                // border: "1px solid rgba(255, 255, 255, 0.2)",
                // height: "55vh",

                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
            }}>
                <div className="col-md-6 left-box p-3 d-flex justify-content-center">
                    <div className="logo-container">
                        <img src="/log-removebg-preview.png" alt="logo" style={{ width: "100%", maxWidth: "400px", marginTop: "17vh" }} />
                    </div>
                </div>
                <div className="col-md-6 right-box d-flex justify-content-center" style={{

                }}>
                    <div className="auth-form-container" style={{ marginTop: "2vh" }}>
                        {/* <h2 className="login-color">Sign In</h2> */}
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
                            <span style={{ color: "white", marginLeft: "10px" }}>
                                {loginOption === "admin" ? "Login as Admin" : "Login as Guest"}
                            </span>
                        </div>
                        <br />
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <div>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="youremail@gmail.com"
                                    id="email"
                                    name="email"
                                    style={{ width: "100%", height: "40px" }}
                                    required
                                />
                            </div>
                            <label htmlFor="password">Password</label>
                            <div style={{ position: "relative" }}>
                                <input
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    id="password"
                                    name="password"
                                    style={{ width: "100%", height: "40px" }}
                                    required
                                />
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        right: "15px",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "black"
                                    }}
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </span>
                            </div>
                            <p style={{ color: "white", fontSize: "12px" }}>Forgot password?</p>
                            <button className="login-btn" type="submit">Log In</button>
                        </form>
                        <button className="Link-btn" style={{ width: "100%", fontSize: "14px", marginTop: "10px" }} onClick={() => props.onFormSwitch('register')}>Don't have an account yet? Sign Up.</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAsUser;
