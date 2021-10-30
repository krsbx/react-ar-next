import React from 'react';
import { textPropType } from '../utils/PropChecking';

const Text = (props) => {
  return <a-text {...props}></a-text>;
};

Text.propTypes = textPropType;

export default Text;
