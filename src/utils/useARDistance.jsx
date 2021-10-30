import { useARProvider } from '../components/ARProvider';

// Use this hooks for getting the current distance between
// current active camera with current detected marker
const useARDistance = () => {
  const { isVisible, distance } = useARProvider();

  return isVisible && distance.current;
};

export default useARDistance;
