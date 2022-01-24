/*
 * @Description: 
 * @Author: Gavin
 * @version: 
 * @Date: 2020-11-03 16:27:50
 * @LastEditTime: 2020-11-20 10:12:36
 */
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
