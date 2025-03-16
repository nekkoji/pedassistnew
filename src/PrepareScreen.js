import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrepareScreen.css'; 

export default function PrepareScreen() {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/arm-orientation');
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }}
        >
            <div className="header-container">
                <h1 className="header-text">Prepare the materials needed</h1>
            </div>

            <div className="content-container">
                {}
                {}
            </div>

            <button className="next-button" onClick={handleNextStep}>
                Next
            </button>
        </div>
    );
}
