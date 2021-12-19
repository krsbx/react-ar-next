import { jsx as _jsx } from "react/jsx-runtime";
import _ from 'lodash';
import { getAnimations } from '../utils/animationHandler';
import { propsConverter } from '../utils/componentHandler';
const Entity = (props) => {
    const animation = props.animation && getAnimations(props.animation);
    return (
    // @ts-ignore
    _jsx("a-entity", Object.assign({}, propsConverter(_.omit(props, ['children', 'animation'])), animation, { children: props.children }), void 0));
};
export default Entity;
