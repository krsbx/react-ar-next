import { useEffect } from 'react';

// Use this element for getting the current active camera
const useARCamera = (ref) => {
  useEffect(() => {
    ref.current = document.getElementById('react-ar-next-camera');
  }, []);
};

export default useARCamera;
