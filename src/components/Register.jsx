import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Toast from "./ErrorToast";
import { clearError, setError } from "../store/errorReducer";
import axios from "axios";

function Register({ onFormSwitch, openLoginPopup, closeRegisterPopup }) {
    const loginError = useSelector((state) => state.error.error);
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            birthDate: "",
        },
        onSubmit: async (values) => {
            if (!values.fullName.trim()) {
                dispatch(setError("Name is required!"));
                return;
            }
            if (!values.email.trim()) {
                dispatch(setError("Email is required!"));
                return;
            }
            if (!values.password.trim()) {
                dispatch(setError("Password is required!"));
                return;
            }
            if (!values.confirmPassword.trim()) {
                dispatch(setError("Please confirm password!"));
                return;
            }
            if (values.password !== values.confirmPassword) {
                dispatch(setError("Passwords do not match!"));
                return;
            }
            if (!values.birthDate) {
                dispatch(setError("Birth Date is required!"));
                return;
            }

            try {
                const res = await axios.post("http://localhost:8000/api/v1/users", {
                    id: users.length + 1,
                    fullName: values.fullName,
                    email: values.email,
                    password: values.password,
                });

                console.log(res);
                formik.resetForm();
                openLoginPopup();
                if (typeof onFormSwitch === "function") {
                    onFormSwitch();
                }
            } catch (error) {
                dispatch(setError("An error occurred during registration."));
            }
        },
    });

    const closeToast = () => {
        dispatch(clearError());
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
                overflow: " auto",
                zIndex: "3",
            }}>
                <button className="btn" onClick={closeRegisterPopup} style={{
                    position: "absolute",
                    top: "6%",
                    right: "2%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#293D76",
                }}> <i className="fas fa-times"></i></button>
                <img src="/logo.png" alt="logo" style={{ width: "50%", minWidth: "200px", marginTop: "4vh", height: "10vh" }} />
                <div className="register-container">
                    <div className="register-card pe-5 ps-5 d-flex flex-column align-items-center">
                        <h6 className="register-title pt-2" style={{ color: "#293D76" }}>Create an Account</h6>
                        <form className="register-form pe-5 ps-5" onSubmit={formik.handleSubmit}>
                            <div className="input-group">
                                <label className="register-label">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
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
                                    id="email"
                                    name="email"
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
                                    id="password"
                                    name="password"
                                    placeholder="********"
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
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </span>
                            </div>
                            <div className="input-group">
                                <label className="register-label">Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="********"
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
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </span>
                            </div>
                            <div className="input-group">
                                <label className="register-label">Birth Date</label>
                                <input
                                    type="date"
                                    id="birthDate"
                                    name="birthDate"
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
                        <button type="submit" className="btn btn-light register-button">Register</button>
                        <button className="Link-btn" style={{ width: "100%", fontSize: "14px" }} onClick={openLoginPopup}>Already have an account? Log In.</button>
                    </div>
                </div>
            </div>
            <Toast isVisible={isToastVisible} onClose={closeToast} content={loginError} />
        </>
    );
}

export default Register;
