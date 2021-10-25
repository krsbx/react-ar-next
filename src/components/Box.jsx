import _ from 'lodash';
import React from 'react';
import { boxPropType } from '../utils/PropChecking';

const Box = (props) => {
  return <a-box {..._.omit(props, ['children'])}>{props.children}</a-box>;
};

Box.propTypes = boxPropType;

export default Box;
