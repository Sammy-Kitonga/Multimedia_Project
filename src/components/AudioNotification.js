import React from 'react';

const AudioNotification = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div 
      onClick={onClick}
      style={{
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        border: '1px solid #f59e0b',
        borderRadius: '12px',
        padding: '12px 16px',
        margin: '10px 0',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#92400e',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-1px)';
        e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      }}
    >
      🎵 <strong>Traditional Music Available</strong> - Click here to enable background audio
    </div>
  );
};

export default AudioNotification;
