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
                {/* Auto-playing, looping video */}
                <video className="instruction-video" autoPlay loop muted>
                    <source src="/assets/videos/veni.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
