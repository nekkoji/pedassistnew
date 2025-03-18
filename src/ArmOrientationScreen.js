import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArmOrientationScreen.css'; 

export default function ArmOrientationScreen() {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/tie-tourniquet');
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }}
        >
            <div className="header-container">
                <h1 className="header-text">Ensure Proper Arm Orientation</h1>
            </div>
            <div className="content-container">
                {

                }
            </div>
            <button className="next-button" onClick={handleNextStep}>
                Next
            </button>
        </div>
    );
}
