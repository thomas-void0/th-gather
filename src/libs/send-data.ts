
import { TList } from "../typings"

//读取浏览器中的信息记录
export const getSessionStorage = ():TList[] | Array<any>=>{
  const record = window.sessionStorage.getItem("NR_TRADE_GATHER_LIST");
  return record ? JSON.parse(record) : [];
};
const _list = getSessionStorage(); 

//检查是否需要发送消息
const isSend =(list:TList[]):boolean=> list.length >= window["gather_config"].tthreshold;

//设置并且检测浏览器中的信息记录
const setLocalStorage = (data: TList):TList[] | undefined =>{
  _list.push(data);

  // let j = 0;
  // while(j<_list.length){
  //   let item = _list[j];
  //   for(let i = 0;i<_list.length;i++){
  //     if(i === j) continue;
  //     if(_list[i].type === item.type && _list[i].gmt === item.gmt){
  //       console.error("错误，连续上传了2条一样的数据:",item)
  //     }
  //   }
  //   j++
  // }
 
  window.sessionStorage.setItem("NR_TRADE_GATHER_LIST",JSON.stringify(_list))
  return isSend(_list) ? _list.slice(0,window["gather_config"].tthreshold) : void 0
};

//清除相应的数据存储
const resetList = ():void=>{
  _list.splice(0,window["gather_config"].tthreshold);
  window.sessionStorage.clear()
}

//是否在发送数据
let loading = false;

/**
 * 上报数据数据
 * @param data TList
 * @param action boolean 是否要立即进行数据上报
 */
export default function sendData(data: TList): void {
  //设置浏览器中的存储
  const list:TList[] | undefined = setLocalStorage(data);
  //如果有数据，同时loading为false
  if(list && !loading){
    loading = true;
    const formData = new FormData();
    formData.append('value', JSON.stringify(list));
    //进行数据上报
    fetch(window['gather_config'].url, {
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
