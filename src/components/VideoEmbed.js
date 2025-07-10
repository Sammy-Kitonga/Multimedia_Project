import React from 'react';

const VideoEmbed = ({ 
  videoId, 
  title = "Cultural Video", 
  width = "100%", 
  height = "315",
  className = "styled-video"
}) => {
  // Extract video ID from full YouTube URL if needed
  const extractVideoId = (url) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.split('watch?v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split('?')[0];
    }
    return url; // Assume it's already just the ID
  };

  const cleanVideoId = extractVideoId(videoId);

  return (
    <div className="video-container" style={{ 
      position: 'relative', 
      paddingBottom: '56.25%', // 16:9 aspect ratio
      height: 0,
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      margin: '20px 0'
    }}>
      <iframe
        src={`https://www.youtube.com/embed/${cleanVideoId}?rel=0&modestbranding=1&showinfo=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={className}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '12px'
        }}
      />
      {title && (
        <p className="video-caption" style={{
          textAlign: 'center',
          fontStyle: 'italic',
          color: '#6b7280',
          fontSize: '0.9rem',
          marginTop: '10px'
        }}>
          {title}
        </p>
      )}
    </div>
  );
};

export default VideoEmbed;
