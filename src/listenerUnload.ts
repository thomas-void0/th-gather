// 监听页面卸载
import { getSessionStorage } from "./libs/send-data"

const listenerUnload =  () => {
  window.addEventListener('unload',()=>{
    if ('sendBeacon' in window.navigator) {
      const list = getSessionStorage();
      const fd = new FormData();
      fd.append('value', JSON.stringify(list));
      window.navigator.sendBeacon(window['$$th-gather'].url, fd);
      window.sessionStorage.clear() //清除
    }    
  })
}

export default listenerUnload