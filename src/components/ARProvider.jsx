import React, { createContext, useContext } from 'react';
import { useScript, useWindowDimension } from 'krsbx-hooks';

export const ARContext = createContext();

const ARProvider = ({ children }) => {
  const windowSize = useWindowDimension();

  const { isLoading: arFrameLoading } = useScript(
    'https://aframe.io/releases/1.2.0/aframe.min.js',
    'head'
  );
  const { isLoading: arLoading } = useScript(
    'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js',
    'head'
  );

  return (
    <ARContext.Provider
      value={{
        windowSize: windowSize,
      }}
    >
      {!arFrameLoading && !arLoading && children}
    </ARContext.Provider>
  );
};

export const useARProvider = () => useContext(ARContext);

export default ARProvider;
