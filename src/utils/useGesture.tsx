import _ from 'lodash';
import { useEventListener } from 'krsbx-hooks';
import { useARProvider } from '../components/ARProvider';
import { gestureInterface } from './componentInterface';

const useGesture = (gestureObjects: gestureInterface) => {
  const { oneFinger, twoFinger, threeFinger, fourFinger } = gestureObjects;

  const { isVisible } = useARProvider();

  !!oneFinger &&
    useEventListener('onefingermove', (e: Event) => {
      isVisible && oneFinger();
    });

  !!twoFinger &&
    useEventListener('twofingermove', (e: Event) => {
      isVisible && twoFinger();
    });

  !!threeFinger &&
    useEventListener('threefingermove', (e: Event) => {
      isVisible && threeFinger();
    });

  !!fourFinger &&
    useEventListener('manyfingermove', (e: Event) => {
      isVisible && fourFinger();
    });
};

export default useGesture;
