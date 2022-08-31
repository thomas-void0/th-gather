// 监听页面卸载

import { KEY } from './config';

// import { getSessionStorage } from './libs/dispatchData';

const listenerUnload = (): void => {
  window.addEventListener('unload', () => {
    const { beforeSendMsg, url, store } = window[KEY];
    if ('sendBeacon' in window.navigator) {
      const value = store.get();
      const list = beforeSendMsg
        ? value.filter((o) => beforeSendMsg(o))
        : value;
      const fd = new FormData();
      fd.append('value', JSON.stringify(list));
      window.navigator.sendBeacon(url, fd);
      store.clear(); //清除
      // window.sessionStorage.removeItem(MSG_KEY); //清除
    }
  });
};

export default listenerUnload;
