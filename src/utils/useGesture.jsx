import _ from 'lodash';
import { useEventListener } from 'krsbx-hooks';
import { useARProvider } from '../components/ARProvider';

const useGesture = (gestureObjects) => {
  const { oneFinger, twoFinger, threeFinger, fourFinger } = gestureObjects;

  const { isVisible } = useARProvider();

  !!oneFinger &&
    useEventListener('onefingermove', (e) => {
      isVisible && oneFinger();
    });

  !!twoFinger &&
    useEventListener('twofingermove', (e) => {
      isVisible && twoFinger();
    });

  !!threeFinger &&
    useEventListener('threefingermove', (e) => {
      isVisible && threeFinger();
    });

  !!fourFinger &&
    useEventListener('manyfingermove', (e) => {
      isVisible && fourFinger();
    });
};

export default useGesture;
