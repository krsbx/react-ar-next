import _ from 'lodash';

export const propsConverter = (props) => {
  _.forEach(props, (value, index) => {
    const currentData = value;

    if (_.isObject(currentData)) {
      props[index] = _.values(currentData).join(' ');
    }
  });

  return props;
};
