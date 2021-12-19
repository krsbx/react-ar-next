import _ from 'lodash';
/**
 * Join an object to a string
 * @param props component props
 * @return single object for each props
 */
export const propsConverter = (props) => {
    _.forEach(props, (value, index) => {
        const currentData = value;
        if (_.isObject(currentData)) {
            props[index] = _.values(currentData).join(' ');
        }
    });
    return props;
};
