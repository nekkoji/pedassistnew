import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessmentScreen.css';

export default function AssessmentScreen() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/home');
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/R2.png')" }} // Web version image
        >
            <button className="arrow-button" onClick={handleGoHome}>
                <img src="/assets/images/arrow.png" alt="Go Back" className="arrow-icon" />
            </button>
        </div>
    );
}
