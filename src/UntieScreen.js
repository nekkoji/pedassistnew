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
            style={{ backgroundImage: "url('/assets/images/untie.png')" }}
        >
        </div>
    );
}
