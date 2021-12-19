import { jsx as _jsx } from "react/jsx-runtime";
import { propsConverter } from '../utils/componentHandler';
const Text = (props) => {
    // @ts-ignore
    return _jsx("a-text", Object.assign({}, propsConverter(props)), void 0);
};
export default Text;
