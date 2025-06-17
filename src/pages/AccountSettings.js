import React from 'react';
import './AccountSettings.css';
import profileImage from './profile.jpg';

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <div className="account-settings-card">
        <h2>Account Settings</h2>
        <div className="profile-section">
          <div className="avatar-container">
            <img src={profileImage} alt="Profile" className="avatar" />
          </div>
          <div className="profile-info">
            <p className="name">Marry Doe</p>
            <p className="email">Marry@Gmail.Com</p>
            <p className="description">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
