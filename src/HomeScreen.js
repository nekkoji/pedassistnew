import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './HomeScreen.css'; 

export default function HomeScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const { firstName = 'Welcome!', lastName = '' } = location.state || {}; // Dynamic name from navigation state

    const [selectedMode, setSelectedMode] = useState(null);

    const handleStart = () => {
        if (selectedMode === 'Walkthrough') {
            navigate('/walkthrough/' + firstName);
        } else if (selectedMode === 'RetDem') {
            navigate('/ret-dem');
        } else {
            alert('Please select a mode before proceeding.');
        }
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGG.png')" }}
        >
            <div className="home-container">
                {/* Back Button */}
                <button className="back-button" onClick={() => navigate('/start')}>
                    <img src="/assets/images/arrow.png" alt="Back" className="arrow-icon" />
                </button>

                {/* Logo */}
                <img src="/assets/images/blood.png" alt="Logo" className="logo" />

                {/* Greeting */}
                <h1 className="greeting">Hello, {firstName} {lastName}</h1>

                {/* Video Placeholder */}
                <div className="dummy-video-container">
                    <img src="/assets/images/dummyVideo.jpg" alt="Video" className="dummy-video-image" />
                    <img src="/assets/images/play.png" alt="Play" className="play-icon" />
                </div>

                {/* Instruction */}
                <p className="instruction">Choose your pediatric venipuncture training mode</p>

                {/* Walkthrough Mode */}
                <div
                    className={`mode-button ${selectedMode === 'Walkthrough' ? 'selected-button' : ''}`}
                    onClick={() => setSelectedMode('Walkthrough')}
                >
                    <img src="/assets/images/WM.png" alt="Walkthrough" className="mode-icon" />
                    <div className="mode-text-container">
                        <p className="mode-title">Walkthrough</p>
                        <p className="mode-description">Step-by-step guide & immediate feedback</p>
                    </div>
                </div>

                {/* RetDem Mode */}
                <div
                    className={`mode-button ${selectedMode === 'RetDem' ? 'selected-button' : ''}`}
                    onClick={() => setSelectedMode('RetDem')}
                >
                    <img src="/assets/images/RTM.png" alt="RetDem" className="mode-icon" />
                    <div className="mode-text-container">
                        <p className="mode-title">RetDem</p>
                        <p className="mode-description">Unassisted Performance & Overall Assessment</p>
                    </div>
                </div>

                {/* Start Button */}
                <button
                    className={`start-button ${!selectedMode ? 'disabled-button' : ''}`}
                    onClick={handleStart}
                    disabled={!selectedMode}
                >
                    START
                </button>

                {/* User Profile Button */}
                <button
                    className="profile-button"
                    onClick={() => navigate('/profile', { state: { firstName, lastName } })}
                >
                    User Profile
                </button>
            </div>
        </div>
    );
}
