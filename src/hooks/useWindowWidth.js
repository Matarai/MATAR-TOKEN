import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only on mount and unmount

  return windowWidth;
};

export default useWindowWidth;
