import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WithdrawScreen.css'; // 

export default function WithdrawScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/evacuated-tube'); // Navigate to Evacuated Tube screen
        }, 8500);

        return () => clearTimeout(timer); 
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }} 
        >
            <div className="header-container">
                <h1 className="header-text">Withdraw the needle from the puncture site</h1>
            </div>

            <div className="content-container">
                {}
            </div>
        </div>
    );
}
