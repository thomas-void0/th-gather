// 监听页面卸载

import { KEY } from "./config";
import { getSessionStorage } from "./libs/dispatchData"

const listenerUnload =  () => {
  window.addEventListener('unload',()=>{
    if ('sendBeacon' in window.navigator) {
      const { beforeSendMsg } = window[KEY]
      const o = getSessionStorage();
      const list = beforeSendMsg ? beforeSendMsg(o) :  o
      const fd = new FormData();
      fd.append('value', JSON.stringify(list));
      window.navigator.sendBeacon(window[KEY].url, fd);
      window.sessionStorage.clear() //清除
    }    
  })
}

export default listenerUnload