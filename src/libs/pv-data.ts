import getBaseMsg from './get-base-msg';
import sendData from "./send-data";

let prev_pathname = '';
let prev_time = Date.now();

const setPage = ():void => {

  sendData({
    ...getBaseMsg(),
    pathname: window.location.href,
    from: prev_pathname,
    title: document.title,
    type: 'pv',
    stay: Date.now() - prev_time,
  });

  prev_pathname = window.location.href;
};

export default setPage;
