import { proxy } from "ajax-hook"
// import config,{checkKeys} from './config';
import { jsError, resourceError, promiseError } from './libs/get-error';
import performance from './libs/performance';
import getBaseMsg from './libs/get-base-msg';
import sendData from './libs/send-data';
import hashMode from './hash-mode';
import getXMLInfo from "./libs/get-xml"
import setUserUUid from "./libs/set-user-uuid"
import handleError from "./libs/handleError";
import { getSessionStorage } from "./libs/send-data"
import { Options } from "./typings";


//一定时间后开始监听performance
const listenerPerformance = () =>setTimeout(() => sendData(performance()), window['$$th-gather'].outtime);

//监听错误
const listenerError = e => {
  if (e instanceof ErrorEvent) {
    sendData(jsError(e));
  } else {
    e.target?.src !== window.location.href &&  sendData(resourceError(e));
  }
};

//监听promise错误
const listenerPromiseError = e => sendData(promiseError(e));

// 监听页面卸载
const listenerUnload =  () => {
  if ('sendBeacon' in window.navigator) {
    const list = getSessionStorage();
    const fd = new FormData();
    fd.append('value', JSON.stringify(list));
    window.navigator.sendBeacon(window['$$th-gather'].url, fd);
    window.sessionStorage.clear() //清除
  }
}

// export default { sendData, getBaseMsg };

const defaultGatherKeys = [
  'key',
  'o',
  'ua',
  'ul',
  'ct',
  'vp',
  'sr',
  'uid',
  'uuid',
  'gmt',
  'dpr',
  'rf'
]

// 需要收集的配置
export default function init(options:Options){

  // 仅能初始化一次配置
  if(window['$$th-gather']){
    console.error("just initialized once");
    return
  }

  const { 
    projectKey,
    url,
    gatherKeys = defaultGatherKeys,
    callback,
    frequency,
    isDiscard = true
  } = options

  !projectKey && handleError("params error，'projectKey' is required");
  !url && handleError("params error，'url' is required");

  // 挂载配置
  window['$$th-gather'] = options

  // 初始化记录对象
  const record = []

  // 收集的配置和参数

  // 拦截所有由XMLHttpRequest发起的请求
  proxy({
    //请求发起前进入
    onRequest: (reqConfig, handler) => {
      // 绑定请求时间，以在后续流程中计算接口访问用时
      reqConfig.headers.rq = Date.now();
      handler.next(reqConfig);
    },
    //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
    onError: (err, handler) => handler.next(err),
    //请求成功后进入
    onResponse: (response, handler) => {

      //获取的接口的返回值信息
      const xmlObj = getXMLInfo(response)
      sendData(xmlObj)

      //设置用户uuid
      setUserUUid(response);
      handler.next(response) 
    }
  })

  //监听页面资源error
  window.addEventListener('error', listenerError, true);

  //监听页面promise发生错误，没有被reject处理的reject
  window.addEventListener('unhandledrejection', listenerPromiseError, false);

  //监听performance等信息
  window.addEventListener('load', listenerPerformance, false);

  //页面卸载，进行一次数据上传
  isDiscard && window.addEventListener('unload',listenerUnload)

  // 监听路由信息
  hashMode();

  // 调用回调监听
  callback(record)
}

