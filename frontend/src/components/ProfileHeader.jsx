// src/components/ProfileHeader.jsx
import React from 'react';

const ProfileHeader = ({ profile }) => {
  const links = profile?.links || {};
  return (
    <header className="profile-header">
      <h1>{profile?.fullName || 'No Name'}</h1>
      <p>{profile?.email || 'No Email'}</p>
      <div className="links">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
