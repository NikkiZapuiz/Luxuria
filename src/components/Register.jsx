import React, { useState } from "react";
import users from "./Users";
import Toast from "./ErrorToast";
import { clearError, setError } from "../store/errorReducer";
import { useDispatch, useSelector } from "react-redux";


function Register({onFormSwitch, openLoginPopup, closeRegisterPopup}) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const loginError = useSelector((state) => state.error.error);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!fullName.trim()) {
            dispatch(setError("Name is required!"));
            return;
        }
        if (!email.trim()) {
            dispatch(setError("Email is required!"));
            return;
        }
        if (!password.trim()) {
            dispatch(setError("Password is required!"));
            return;
        }
        if (!confirmPassword.trim()) {
            dispatch(setError("Please confirm password!"));
            return;
        }
        if (password !== confirmPassword) {
            dispatch(setError("Passwords do not match!"));
            return;
        }
        if (!birthDate) {
            dispatch(setError("Birth Date is required!"));
            return;
        }
    
        const newUser = {
            id: users.length + 1,
            fullName,
            email,
            password,
            birthDate,
        };
    
        users.push(newUser); 
    
        openLoginPopup();
        if (typeof onFormSwitch === 'function') {
            onFormSwitch();
        }
    };

    const closeToast = () => {
        dispatch(clearError());
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

    const isToastVisible = loginError !== null;

    return (
        <>
            <div className="shadow pb-4 modal-backdrop d-flex flex-column align-items-center" style={{
                margin: "auto",
                borderRadius: "10px",
                width: "90%",
                maxWidth: "500px",
                maxHeight: "100%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                top: "60%",
                left: "50%",
                background: "white",
                overflow:" auto",
                zIndex: "3",
            }}>
                <button className="btn" onClick={closeRegisterPopup} style={{
                    position: "absolute",
                    top: "6%",
                    right: "2%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#293D76",
                }}> <i className="fa-solid fa-x"></i></button>
                <img src="/logo.png" alt="logo" style={{ width: "50%", minWidth: "200px", marginTop: "4vh", height: "10vh" }} />
                <div className="register-container">
                    <div className="register-card pe-5 ps-5 d-flex flex-column align-items-center">
                        <h6 className="register-title pt-2" style={{ color: "#293D76" }}>Create an Account</h6>
                        <form className="register-form pe-5 ps-5" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label className="register-label">Full Name</label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="register-input"
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
                            <div className="input-group">
                                <label className="register-label">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="register-input"
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
                            <div className="input-group">
                                <label className="register-label">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="register-input password-toggle-input"
                                    style={{
                                        width: "120%",
                                        height: "40px",
                                        color: "#293D76",
                                        border: "1px solid #293D76",
                                        borderRadius: "5px",
                                        paddingLeft: "10px"
                                    }}
                                    required
                                />
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "70%",
                                        right: "15px",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "#293D76",
                                    }}
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </span>
                            </div>
                            <div className="input-group">
                                <label className="register-label">Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="********"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="register-input password-toggle-input"
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
                                        top: "70%",
                                        right: "15px",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "#293D76", 
                                    }}
                                    onClick={toggleShowConfirmPassword}
                                >
                                    {showConfirmPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </span>
                            </div>
                            <div className="input-group">
                                <label className="register-label">Birth Date</label>
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    className="register-input"
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
                            <br />
                        </form>
                        <button type="submit" className="btn btn-light register-button" onClick={handleSubmit}>Register</button>
                        <button className="Link-btn" style={{ width: "100%", fontSize: "14px" }} onClick={openLoginPopup}>Already have an account? Log In.</button>
                    </div>
                </div>
            </div>
            <Toast isVisible={isToastVisible} onClose={closeToast} content={loginError} />
        </>
    );
}

export default Register;
