import { useARProvider } from '../components/ARProvider';

// Use this hooks for getting the current distance between
// current active camera with current detected marker
const useARDistance = () => {
  const { distance }: any = useARProvider();

  return distance.current;
};

export default useARDistance;
