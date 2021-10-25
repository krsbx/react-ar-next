import React, { createContext, useContext } from 'react';
import useScript from '../utils/useScript';

const ARContext = createContext();

const ARProvider = ({ children }) => {
  useScript(
    'https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar.js',
    'head'
  );
  useScript('https://aframe.io/releases/1.2.0/aframe.min.js', 'head');

  return <ARContext.Provider value={{}}>{children}</ARContext.Provider>;
};

export const useARProvider = () => {
  return useContext(ARContext);
};

export default ARProvider;
