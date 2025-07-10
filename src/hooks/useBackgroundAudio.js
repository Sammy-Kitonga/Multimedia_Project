import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for managing background audio with autoplay fallbacks
 * @param {string} audioSrc - Path to the audio file
 * @param {number} initialVolume - Initial audio volume (0-1, default: 0.3)
 * @returns {Object} - Contains audioRef, states, and control functions
 */
export const useBackgroundAudio = (audioSrc, initialVolume = 0.3) => {
  const audioRef = useRef(null);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(initialVolume);

  const attemptPlay = useCallback(async () => {
    const audio = audioRef.current;
    if (audio) {
      try {
        audio.volume = volume;
        await audio.play();
        console.log("Audio started successfully");
        setAudioBlocked(false);
        setIsPlaying(true);
        return true;
      } catch (error) {
        console.warn("Audio play failed:", error);
        setAudioBlocked(true);
        setIsPlaying(false);
        return false;
      }
    }
    return false;
  }, [volume]);

  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayPause = useCallback(async () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        pauseAudio();
      } else {
        await attemptPlay();
      }
    }
  }, [isPlaying, attemptPlay, pauseAudio]);

  const changeVolume = useCallback((newVolume) => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  }, []);

  const setupUserInteractionListener = useCallback(() => {
    const handleFirstInteraction = async () => {
      const success = await attemptPlay();
      if (success) {
        // Remove listeners after successful play
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [attemptPlay]);

  // Listen for audio events to update playing state
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioSrc]);

  useEffect(() => {
    let cleanupListener = null;

    const initializeAudio = async () => {
      // Try immediate autoplay
      const success = await attemptPlay();
      
      if (!success) {
        // Try again after a short delay
        setTimeout(async () => {
          const delayedSuccess = await attemptPlay();
          if (!delayedSuccess) {
            // Set up user interaction listeners as fallback
            cleanupListener = setupUserInteractionListener();
          }
        }, 100);
      }
    };

    if (audioSrc) {
      initializeAudio();
    }

    // Cleanup function
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (cleanupListener) {
        cleanupListener();
      }
    };
  }, [audioSrc, attemptPlay, setupUserInteractionListener]);

  const manualPlay = useCallback(() => attemptPlay(), [attemptPlay]);

  return {
    audioRef,
    audioBlocked,
    isPlaying,
    volume,
    manualPlay,
    togglePlayPause,
    changeVolume,
    pauseAudio
  };
};

export default useBackgroundAudio;
