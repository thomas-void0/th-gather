import { ExtraMsg, Msg } from '../typings';

import { KEY } from '../config';
import getBaseMsg from './getBaseMsg';
import log from './log';

//读取浏览器中的信息记录
// export const getSessionStorage = (): Msg[] | Array<any> => {
//   const record = window.sessionStorage.getItem(MSG_KEY);
//   return record ? JSON.parse(record) : [];
// };
// const msgList = getSessionStorage();

//检查是否需要发送消息
// const isSend = (list: Msg[]): boolean => list.length >= window[KEY].frequency;

//设置并且检测浏览器中的信息记录
// const setLocalStorage = (data: Msg): Msg[] | undefined => {
//   msgList.push(data);
//   window.sessionStorage.setItem(MSG_KEY, JSON.stringify(msgList));
//   return isSend(msgList) ? msgList.slice(0, window[KEY].frequency) : void 0;
// };

//清除相应的数据存储
// const resetList = (): void => {
//   msgList.splice(0, window[KEY].frequency);
//   window.sessionStorage.removeItem(MSG_KEY);
// };

/**
 * 存储数据
 * @param data
 */
const saveData = (data: Msg): Msg[] | undefined => {
  const { store, frequency } = window[KEY];
  const list = store.get() || [];
  const _list = [...list, data];
  // 是否需要发送数据
  if (_list.length >= frequency) {
    return _list;
  }
  // 不需要发送就进行存储
  store.set(_list);
  return void 0;
};

//是否在发送数据
let loading = false;

/**
 * 上报数据数据
 * @param data Msg
 * @param action boolean 是否要立即进行数据上报
 */
export default function dispatchData(data: ExtraMsg): void {
  const { beforeSendMsg, isLog, headers, store } = window[KEY];
  //设置浏览器中的存储
  const o = { ...getBaseMsg(), ...data };
  const _data = beforeSendMsg ? beforeSendMsg(o) : o;
  // 打印Log
  isLog && log(_data);
  const list: Msg[] | undefined = saveData(_data);
  //如果有数据，同时loading为false
  if (list && !loading) {
    loading = true;
    const formData = new FormData();
    formData.append('value', JSON.stringify(list));
    //进行数据上报
    fetch(window[KEY].url, {
      credentials: 'include',
      method: 'post',
      body: formData,
      headers,
    })
      .then(() => {
        loading = false;
        // resetList();
        //数据上报完成后，清空列表
        store.clear();
      })
      .catch((e) => {
        loading = false;
        console.log(e);
      });
  }
}
