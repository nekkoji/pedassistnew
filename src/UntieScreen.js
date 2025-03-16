import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UntieScreen.css';

export default function UntieScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/withdraw'); 
        }, 8500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }}
        >
            <div className="header-container untie-header">
                <h1 className="header-text">Quick!<br />Untie the Tourniquet</h1>
            </div>

            <div className="content-container">
                {}
            </div>
        </div>
    );
}
