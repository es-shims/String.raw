import callBind from 'es-abstract/helpers/callBind.js';

import getPolyfill from 'string.raw/polyfill';

export default callBind(getPolyfill(), String);

export { default as getPolyfill } from 'string.raw/polyfill';
export { default as implementation } from 'string.raw/implementation';
export { default as shim } from 'string.raw/shim';
