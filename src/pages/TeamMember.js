import React from 'react';

const TeamMember = ({ image, text, reverse }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      alignItems: 'center',
      margin: '20px 0'
    }}>
      <img src={image} alt="Team Member" style={{ width: '200px', height: '200px', borderRadius: '30%', margin: '0 20px' }} />
      <p>{text}</p>
    </div>
  );
};

export default TeamMember;
