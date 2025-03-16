import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoScreen.css'; 

export default function VideoScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/needle-angle'); 
        }, 8500);

        return () => clearTimeout(timer); 
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }}
        >
            <div className="content-container">
                {/* Placeholder for video content or animation */}
            </div>
        </div>
    );
}
