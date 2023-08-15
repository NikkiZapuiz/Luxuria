import React, { useState } from "react";
import Switch from "react-switch";
import users from "./Users";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authReducer";
import { useNavigate } from "react-router-dom";
import Toast from "./ErrorToast";
import { clearError, setError } from "../store/errorReducer";

function LoginAsUser({ closeLoginPopup, openRegisterPopup }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginOption, setLoginOption] = useState("user");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginError = useSelector((state) => state.error.error);

    const handleLogin = (e) => {
        e.preventDefault();

        const user = users.find((user) => user.email === email);

        if (user && user.password === password) {
            navigate("/");
            dispatch(login(user));
            closeLoginPopup();
        } else {
            dispatch(setError("Invalid email or password"));
            console.log("toast");
            
        }

    };

    const closeToast = () => {
        dispatch(clearError());
    };

    const handleOptionChange = (checked) => {
        setLoginOption(checked ? "admin" : "user");
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const isToastVisible = loginError !== null;

    return (
        <>

            <div
                className="modal d-flex justify-content-center shadow"
                style={{
                    margin: "auto",
                    borderRadius: "10px",
                    width: "90%", 
                    maxWidth: "400px", 
                    maxHeight: "80%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    background: "white",
                    zIndex: "3",
                    padding: "20px", 
                }}
            >
                <button className="btn" onClick={closeLoginPopup} style={{
                    position: "absolute",
                    top: "6%",
                    right: "2%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#293D76",
                }}> <i className="fa-solid fa-x"></i></button>
                <div className="auth-form-container d-flex flex-column align-items-center justify-content-center " style={{ marginTop: "2vh" }}>
                    <img src="/logo.png" alt="logo" style={{ width: "50%", minWidth: "200px", marginTop: "5vh" }} />
                    <div className="toggle-container pt-2">
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
                    <form className="login-form d-flex flex-column align-items-center" onSubmit={handleLogin}>
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
                                    width: "100%",
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                id="password"
                                name="password"
                                style={{
                                    width: "100%",
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
                                    right: "5%",
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
                    <button className="Link-btn" style={{ width: "100%", fontSize: "14px", marginTop: "10px" }} onClick={openRegisterPopup}>Don't have an account yet? Sign Up.</button>
                </div>
            </div>
            <Toast isVisible={isToastVisible} onClose={closeToast} content={loginError} />
        </>
    );
}

export default LoginAsUser;
