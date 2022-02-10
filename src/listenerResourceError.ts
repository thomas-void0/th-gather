import getBaseMsg from "./libs/getBaseMsg";
import dispatchData from "./libs/dispatchData";
import { ErrorMsg } from "./typings";

// js错误
export function jsError(error: ErrorEvent): ErrorMsg {
  return {
    ...getBaseMsg(),
    type: 'error',
    st: 'js',
    file: error.filename,
    line: error.lineno,
    col: error.colno,
    msg: error.message,
    // stack: error.error?.stack?.substring(0, 1e3),
  };
}

// 资源异常
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

const _listenerError = e => {
  if (e instanceof ErrorEvent) {
    dispatchData(jsError(e));
  } else {
    e.target?.src !== window.location.href && dispatchData(resourceError(e));
  }
}

//监听错误
const listenerResourceError = () => {
  //监听页面资源error
  window.addEventListener('error', _listenerError, true);
};

export default listenerResourceError