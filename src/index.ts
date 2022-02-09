import { proxy } from "ajax-hook"
// import config,{checkKeys} from './config';
import { jsError, resourceError, promiseError } from './libs/get-error';
import performance from './libs/performance';
import sendData from './libs/send-data';
import listenerRoute from './listenerRoute';
import getXMLInfo from "./libs/get-xml"
import setUserUUid from "./libs/set-user-uuid"
import handleError from "./libs/handleError";
import { Options } from "./typings";
import listenerUnload from "./listenerUnload";
import listenerError from "./listenerError";

//一定时间后开始监听performance
const listenerPerformance = () => setTimeout(() => sendData(performance()), window['$$th-gather'].outtime);

//监听promise错误
const listenerPromiseError = e => sendData(promiseError(e));

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
    projectKey, // 项目key
    url, // 上报地址
    gatherKeys = defaultGatherKeys, // 收集的字段
    callback, // 回调函数
    frequency, // 上报频率
    isDiscard = true // 是否销毁上报
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
  listenerError()

  //监听页面promise发生错误，没有被reject处理的reject
  window.addEventListener('unhandledrejection', listenerPromiseError, false);

  //监听performance等信息
  window.addEventListener('load', listenerPerformance, false);

  //页面卸载，进行一次数据上传
  isDiscard && listenerUnload()

  // 监听路由信息
  listenerRoute();

  // 调用回调监听
  callback(record)
}

