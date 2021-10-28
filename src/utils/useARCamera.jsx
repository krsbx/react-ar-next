import { useARProvider } from '../components/ARProvider';

// Use this element for getting the current active camera
const useARCamera = () => {
  const { cameraRef } = useARProvider();

  return cameraRef.current;
};

export default useARCamera;
