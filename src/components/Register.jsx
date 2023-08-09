import React, { useState } from "react";
import { Link } from "react-router-dom";



function Register(props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        console.log("Birth Date:", birthDate);
        // Add your registration logic here

    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };


    return (
        <>
            <div className="shadow pb-4" style={{borderRadius: "2%"}}>
                <img src="/logo.png" alt="logo" style={{ width: "50%", minWidth: "200px", marginTop: "5vh" }} />
                <div className="register-container">
                    <div className="register-card pe-5 ps-5">
                        <h5 className="register-title" style={{ color: "#293D76" }}>Create an Account</h5>
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
                                        color: "#293D76", // Should be color: "#293D76" to match your design
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
                                        color: "#293D76", // Should be color: "#293D76" to match your design
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
                            <button type="submit" className="btn btn-light register-button">Register</button>
                        </form>
                        <button className="Link-btn" style={{ width: "100%", fontSize: "14px" }} onClick={() => props.onFormSwitch('login')}>Already have an account? Log In.</button>
                    </div>
                </div>
            </div>
        </>
    );      
}

export default Register;
