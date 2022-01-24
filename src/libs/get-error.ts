import getBaseMsg from './get-base-msg';
import { ErrorMsg } from '../typings';

// js错误
export function jsError(error: ErrorEvent): ErrorMsg {
  return {
    ...getBaseMsg(),
    type: 'error',
    st: 'js',
    file: error.filename,
    // line: error.lineno,
    // col: error.colno,
    msg: error.message,
    // stack: error.error?.stack?.substring(0, 1e3),
  };
}

// 资源异常
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function resourceError(e: any): ErrorMsg {
  return {
    ...getBaseMsg(),
    type: 'error',
    st: 'resource',
    file: e.target.src,
    // stack: e.target.tagName,
    msg: e.target.outerHTML,
  };
}

// promise异常
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function promiseError(e): ErrorMsg {
  console.log("errr==>",e.reason,"promise")
  return {
    ...getBaseMsg(),
    type: 'error',
    st: 'promise',
    msg: e.reason,
    // stack: '',
    file: '',
  };
}
