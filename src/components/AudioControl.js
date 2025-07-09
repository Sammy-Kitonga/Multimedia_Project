import React, { useState } from 'react';

const AudioControl = ({ audioRef, isPlaying, onToggle, volume, onVolumeChange }) => {
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      border: '1px solid #d1d5db',
      borderRadius: '12px',
      padding: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.9rem',
      color: '#374151',
      userSelect: 'none',
      transition: 'all 0.3s ease'
    }}>
      {/* Music Note Icon */}
      <span style={{ fontSize: '1.2rem' }}>🎵</span>
      
      {/* Play/Pause Button */}
      <button
        onClick={onToggle}
        style={{
          background: isPlaying ? '#ef4444' : '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '6px 12px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = '1';
        }}
      >
        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
      </button>

      {/* Volume Control */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setShowVolumeControl(!showVolumeControl)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.1rem',
            padding: '4px'
          }}
          title="Volume Control"
        >
          🔊
        </button>
        
        {showVolumeControl && (
          <div style={{
            position: 'absolute',
            bottom: '100%',
            right: '0',
            marginBottom: '8px',
            background: 'white',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            padding: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minWidth: '120px'
          }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '4px', 
              fontSize: '0.8rem',
              color: '#6b7280'
            }}>
              Volume: {Math.round(volume * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        )}
      </div>

      {/* Track Info */}
      <span style={{ 
        fontSize: '0.8rem', 
        color: '#6b7280',
        fontStyle: 'italic'
      }}>
        Traditional Music
      </span>
    </div>
  );
};

export default AudioControl;
