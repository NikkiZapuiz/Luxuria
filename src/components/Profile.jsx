import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/authReducer";


function Profile({ closeProfilePopup }) {
    const [editMode, setEditMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        fullName: user.fullName,
        email: user.email,
        birthdate: user.birthDate,
        password: user.password,
    });

    const handleCloseProfile = () => {
        closeProfilePopup();
    };

    const handleEditToggle = () => {
        console.log(userData);
        setEditMode(!editMode);
    };

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSaveChanges = () => {
        const updatedUser = {
            ...user,
            fullName: userData.fullName,
            email: userData.email,
            birthdate: userData.birthdate,
            password: userData.password,
        };


        dispatch(updateUser(updatedUser));

        setEditMode(false);
        setUserData(updatedUser);
    };


    return (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
            <div className="modal-dialog" style={{ margin: "auto", maxWidth: "500px", marginTop: "10%" }}>
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between align-items-center">
                        <h5 className="modal-title">Profile</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseProfile}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">
                                Full Name:
                            </label>
                            <div className="d-flex align-items-center">
                                {editMode ? (
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        value={userData.fullName}
                                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                                    />
                                ) : (
                                    <p className="mb-0">{userData.fullName}</p>
                                )}
                                <button className="btn btn-link btn-edit" onClick={handleEditToggle}>
                                    {editMode ? <i className="fas fa-check"></i> : <i className="fas fa-pencil-alt"></i>}
                                </button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email:
                            </label>
                            <div className="d-flex align-items-center">
                                {editMode ? (
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={userData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                    />
                                ) : (
                                    <p className="mb-0">{userData.email}</p>
                                )}
                                <button className="btn btn-link btn-edit" onClick={handleEditToggle}>
                                    {editMode ? <i className="fas fa-check"></i> : <i className="fas fa-pencil-alt"></i>}
                                </button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password:
                            </label>
                            <div className="d-flex align-items-center">
                                {editMode ? (
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        id="password"
                                        value={userData.password}
                                        onChange={(e) => handleInputChange("password", e.target.value)}
                                    />
                                ) : (
                                    <p className="mb-0">*******</p>
                                )}
                                {editMode && (
                                    <div className="d-flex">
                                        <button className="btn btn-link btn-toggle" onClick={handlePasswordToggle}>
                                            {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                        </button>
                                        <button className="btn btn-link btn-edit" onClick={handleEditToggle}>
                                            <i className="fas fa-check"></i>
                                        </button>
                                    </div>
                                )}
                                {!editMode && (
                                    <button className="btn btn-link btn-edit" onClick={handleEditToggle}>
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        {editMode && (
                            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
                                Save Changes
                            </button>
                        )}
                        <button type="button" className="btn btn-secondary" onClick={handleCloseProfile}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
