import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartScreen.css'; 

export default function StartScreen() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleGetStarted = () => {
        if (name.trim() === '') {
            alert("Please enter your name to proceed.");
            return;
        }
        navigate(`/walkthrough/${name}`);
    };

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGSS.png')" }}
        >
            <div className="overlay">

                <h1 className="prompt-text">What's your name?</h1>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="enter-button" onClick={handleGetStarted}>
                    Enter
                </button>
            </div>
        </div>
    );
}
