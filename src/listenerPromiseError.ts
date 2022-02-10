// 监听页面promise错误，没有被reject处理的reject

import getBaseMsg from "./libs/getBaseMsg";
import dispatchData from "./libs/dispatchData";
import { ErrorMsg } from "./typings";

export function promiseError(e): ErrorMsg {
  return {
    ...getBaseMsg(),
    type: 'error',
    st: 'promise',
    msg: e.reason,
    // stack: '',
    file: '',
  };
}

const _listenerPromiseError = e => dispatchData(promiseError(e));

export default function listenerPromiseError(){
  window.addEventListener('unhandledrejection', _listenerPromiseError, false);
}
