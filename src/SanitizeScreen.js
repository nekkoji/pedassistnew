import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SanitizeScreen.css'; 

export default function SanitizeScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/venipuncture'); 
        }, 8500);

        return () => clearTimeout(timer); 
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }} 
        >
            <div className="header-container">
                <h1 className="header-text">
                    Sanitize the puncture site using a clean cotton swab
                </h1>
            </div>

            <div className="content-container">
                {}
            </div>
        </div>
    );
}
