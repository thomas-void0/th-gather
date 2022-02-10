
import { Msg } from "../typings"
import 'whatwg-fetch';

//读取浏览器中的信息记录
export const getSessionStorage = ():Msg[] | Array<any>=>{
  const record = window.sessionStorage.getItem("NR_TRADE_GATHER_LIST");
  return record ? JSON.parse(record) : [];
};
const _list = getSessionStorage(); 

//检查是否需要发送消息
const isSend =(list:Msg[]):boolean=> list.length >= window["$$th-gather"].tthreshold;

//设置并且检测浏览器中的信息记录
const setLocalStorage = (data: Msg):Msg[] | undefined =>{
  _list.push(data);
  window.sessionStorage.setItem("NR_TRADE_GATHER_LIST",JSON.stringify(_list))
  return isSend(_list) ? _list.slice(0,window["$$th-gather"].tthreshold) : void 0
};

//清除相应的数据存储
const resetList = ():void=>{
  _list.splice(0,window["$$th-gather"].tthreshold);
  window.sessionStorage.clear()
}

//是否在发送数据
let loading = false;

/**
 * 上报数据数据
 * @param data Msg
 * @param action boolean 是否要立即进行数据上报
 */
export default function dispatchData(data: Msg): void {
  //设置浏览器中的存储
  const list:Msg[] | undefined = setLocalStorage(data);
  //如果有数据，同时loading为false
  if(list && !loading){
    loading = true;
    const formData = new FormData();
    formData.append('value', JSON.stringify(list));
    //进行数据上报
    fetch(window['$$th-gather'].url, {
      credentials: 'include',
      method: 'post',
      body: formData,
    }).then(()=>{
      loading = false;
      resetList()//数据上报完成后，清空列表
    }).catch((e) => {
      loading = false;
      console.log(e);
    });
  }
}
