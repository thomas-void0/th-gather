import { jsError, resourceError } from "./libs/get-error";
import sendData from "./libs/send-data";

const _listenerError = e => {
  if (e instanceof ErrorEvent) {
    sendData(jsError(e));
  } else {
    e.target?.src !== window.location.href && sendData(resourceError(e));
  }
}

//监听错误
const listenerError = () => {
  //监听页面资源error
  window.addEventListener('error', _listenerError, true);
};

export default listenerError