import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './WalkthroughScreen.css'; 

export default function WalkthroughScreen() {
    const navigate = useNavigate();
    const { name } = useParams(); // Getting name from URL params

    const handleEnter = () => {
        navigate('/prepare'); // Navigate to Prepare screen
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }}
        >
            <div className="overlay">
                <h1 className="welcome-text">Welcome {name}!</h1>
                <p className="instruction-text">Let's start training...</p>
                <button className="enter-button" onClick={handleEnter}>
                    Start
                </button>
            </div>
        </div>
    );
}
