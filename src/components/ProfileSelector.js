import React from 'react';

const ProfileSelector = ({ profile, onProfileChange }) => {
  return (
    <div className="profile-selector">
      <label>
        Select Profile:
        <select value={profile} onChange={onProfileChange}>
          <option value="" disabled>Select</option>
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
        </select>
      </label>
    </div>
  );
};

export default ProfileSelector; 