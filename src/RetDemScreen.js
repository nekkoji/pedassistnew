import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Or use separate RetDemScreen.css

export default function RetDemScreen() {
    const navigate = useNavigate();

    const handleFinish = () => {
        navigate('/assessment'); // Redirect to assessment screen
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/R1.png')" }} // You can switch to RM1.png for other platforms if needed
        >
            {/* Finish Button */}
            <div className="button-container">
                <button className="finish-button" onClick={handleFinish}>
                    Finish
                </button>
            </div>
        </div>
    );
}
