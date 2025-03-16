import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Or use a separate ProfileScreen.css

export default function ProfileScreen() {
    const navigate = useNavigate();

    return (
        <div
            className="background"
            style={{ backgroundImage: "url('/assets/images/BG2.png')" }}
        >
            {/* Back Arrow Button */}
            <button className="arrow-button" onClick={() => navigate('/home')}>
                <img src="/assets/images/arrow.png" alt="Back" className="arrow-icon" />
            </button>

            {/* Profile Info Section */}
            <div className="profile-container">
                <img src="/assets/images/profile.png" alt="Profile" className="profile-image" />
                <h2 className="profile-name">TEAM47</h2>
            </div>

            {/* User Details */}
            <div className="details-container">
                <p className="detail-label">First Name: <span className="detail-text">TEAM47</span></p>
                <p className="detail-label">Last Name: <span className="detail-text">PD</span></p>
                <p className="detail-label">Email: <span className="detail-text">pd.team.47@gmail.com</span></p>
                <p className="detail-label">Password: <span className="detail-text">********</span></p>

                {/* Edit Button */}
                <button className="edit-button">
                    Edit
                </button>
            </div>

            {/* Logout Button */}
            <button className="logout-button" onClick={() => navigate('/start')}>
                Logout
            </button>
        </div>
    );
}
