import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CongratulatoryScreen.css'; // You can also create a separate CSS file for this screen if preferred

export default function CongratulatoryScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/training-results');
        }, 5000); // 5-second timer

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/CW.png')" }}
        ></div>
    );
}
