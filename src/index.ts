import handleError from "./libs/handleError";
import { Options } from "./typings";
import listenerRoute from './listenerRoute';
import listenerUnload from "./listenerUnload";
import listenerResourceError from "./listenerResourceError";
import listenerRequest from "./listenerRequest"
import listenerPromiseError from "./listenerPromiseError"
import listenerPerformance from "./listenerPerformance";

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
    isDiscard = true, // 是否销毁上报
    isRoutes = true,
    isPerformance = true,
    isPromiseError = true,
    isResourceError = true,
    isRequest = true
  } = options

  !projectKey && handleError("params error，'projectKey' is required");
  !url && handleError("params error，'url' is required");

  // 挂载配置
  window['$$th-gather'] = options

  // 初始化记录对象
  const record = []

  // 监听接口请求
  if(isRequest){ 
    listenerRequest()
  }

  // 监听页面资源error
  if(isResourceError){
    listenerResourceError()
  }

  // 监听页面promise发生错误
  if(isPromiseError){
    listenerPromiseError()
  }

  // 监听performance等信息
  if(isPerformance){
    listenerPerformance()
  }

  //页面卸载，进行一次数据上传
  if(isDiscard){
    listenerUnload()
  }

  // 监听路由信息
  if(isRoutes){
    listenerRoute()
  }

  // 调用回调监听
  if(callback instanceof Function){
    callback(record)
  }
}




