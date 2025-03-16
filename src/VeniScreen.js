import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VeniScreen.css'; 

export default function VeniScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/video-feed'); 
        }, 8500);

        return () => clearTimeout(timer); 
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }} 
        >
            <div className="header-container">
                <h1 className="header-text">Perform the Venipuncture</h1>
            </div>

            <div className="content-container">
                {}
            </div>
        </div>
    );
}
