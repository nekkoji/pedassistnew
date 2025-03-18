import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EvacuatedTubeScreen.css'; 

export default function EvacuatedTubeScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/congratulatory');
        }, 8500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }}
        >
            <div className="header-container">
                <h1 className="header-text">Safely Fill the Evacuated Tube</h1>
            </div>
            <div className="content-container">
                {}
            </div>
        </div>
    );
}
