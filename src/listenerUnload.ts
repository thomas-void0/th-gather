// 监听页面卸载

import { KEY, MSG_KEY } from './config';

import { getSessionStorage } from './libs/dispatchData';

const listenerUnload = () => {
  window.addEventListener('unload', () => {
    const { beforeSendMsg, url } = window[KEY];

    if ('sendBeacon' in window.navigator) {
      const o = getSessionStorage();
      const list = beforeSendMsg ? beforeSendMsg(o) : o;
      const fd = new FormData();
      fd.append('value', JSON.stringify(list));
      window.navigator.sendBeacon(url, fd);
      window.sessionStorage.removeItem(MSG_KEY); //清除
    }
  });
};

export default listenerUnload;
