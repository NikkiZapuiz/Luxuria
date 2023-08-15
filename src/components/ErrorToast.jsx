import React from 'react';

const Toast = ({ isVisible, content, onClose }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div
            className="toast"
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%', 
                maxWidth: '300px', 
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                zIndex: 3,
            }}
        >
            <button
                className="btn"
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '5px',
                    transform: 'translate(0, -50%)',
                    cursor: 'pointer',
                    color: '#293D76',
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            >
                <i className="fa-solid fa-x"></i>
            </button>
            <p style={{ color: 'black', textAlign: 'center' }}>{content}</p>
            <button
                className="btn"
                onClick={onClose}
                style={{ 
                    color: 'white', 
                    marginTop: '10px',
                    backgroundColor: "#293D76"
                }}>
                Close
            </button>
        </div>
    );
};

export default Toast;
