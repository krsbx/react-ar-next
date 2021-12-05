import { useARProvider } from '../components/ARProvider';

// Use this hooks for getting the current active marker
const useARMarker = () => {
  const { markerRef }: any = useARProvider();

  return markerRef.current;
};

export default useARMarker;
