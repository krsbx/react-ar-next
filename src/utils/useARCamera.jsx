import { useEventListener } from 'krsbx-hooks';

const useARCamera = (ref) => {
  useEventListener('load', () => {
    ref.current = document.querySelector('[camera]');
  });
};

export default useARCamera;
