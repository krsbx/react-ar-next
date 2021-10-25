import _ from 'lodash';
import React from 'react';
import { entityPropType } from '../utils/PropChecking';

const Entity = (props) => {
  return <a-entity {..._.omit(props, ['children'])}>{props.children}</a-entity>;
};

Entity.propTypes = entityPropType;

export default Entity;
