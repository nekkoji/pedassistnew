import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TieTourniquetScreen.css'; 

export default function TieTourniquetScreen() {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/sanitize');
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }}
        >
            <div className="header-container">
                <h1 className="header-text">Properly tie tourniquet around the arm</h1>
            </div>

            <div className="content-container">
                {/* Auto-playing, looping video */}
                <video className="instruction-video" autoPlay loop muted>
                    <source src="/assets/videos/tietour.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p className="warning-text">
                Once the tourniquet is tied, the 1-minute countdown begins!<br />
                Keeping it on for too long can cause discomfort, hemoconcentration, and inaccurate test results.
            </p>

            <button className="next-button" onClick={handleNextStep}>
                Next
            </button>
        </div>
    );
}
