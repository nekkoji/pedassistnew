import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NeedleAngleScreen.css';

export default function NeedleAngleScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/untie');
        }, 8500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BGWT.png')" }} // Ensure image is in public/assets/images
        >
            <div className="header-container">
                <h1 className="header-text">
                    Make sure the needle angle is within the standard range (15-30 degrees)
                </h1>
            </div>

            <div className="content-container">
                {/* Any additional content can go here */}
            </div>

            <p className="warning-text">
                TRIVIA:<br />
                Did you know that inserting a needle at the wrong angle during<br />
                venipuncture can cause serious complications?
            </p>

            <div className="content-container">
                {/* You can keep this for spacing if needed */}
            </div>
        </div>
    );
}
