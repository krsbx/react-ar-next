import React from 'react';
import { propsConverter } from '../utils/componentHandler';
import { textInterface } from '../utils/componentInterface';

const Text: React.FC<textInterface> = (props) => {
  // @ts-ignore
  return <a-text {...propsConverter(props)}></a-text>;
};

export default Text;
