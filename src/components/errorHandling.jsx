import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="modal"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 3, 

            }}
        >
            <div
                className="modal-content"
                style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)',
                    width: '25%', 
                }}
            >
                <p>{content}</p>
                <button className='btn' style={{color: "white", backgroundColor: "#293D76"}} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
