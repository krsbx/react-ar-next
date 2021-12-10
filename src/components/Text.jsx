import React from 'react';
import { textPropType } from '../utils/propChecking';
import { propsConverter } from '../utils/componentHandler';

const Text = (props) => {
  return <a-text {...propsConverter(props)}></a-text>;
};

Text.propTypes = textPropType;

export default Text;
