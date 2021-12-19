import { useARProvider } from '../components/ARProvider';
// Use this hooks for getting the current active camera
const useARCamera = () => {
    const { cameraRef } = useARProvider();
    return cameraRef.current;
};
export default useARCamera;
