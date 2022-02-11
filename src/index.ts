import { Options } from './typings';
import listenerRoute from './listenerRoute';
import listenerUnload from './listenerUnload';
import listenerResourceError from './listenerResourceError';
import listenerRequest from './listenerRequest';
import listenerPromiseError from './listenerPromiseError';
import listenerPerformance from './listenerPerformance';
import dispatchData from './libs/dispatchData';
import * as CONFIG from './config';

export default function init(options: Options): void {
  // 仅能初始化一次配置
  if (window[CONFIG.KEY]) {
    throw new Error('just initialized once');
  }

  const {
    projectKey, // 项目key
    url, // 上报地址
    callback, // 回调函数
    isDiscard = true, // 是否销毁上报
    isRoutes = true,
    isPerformance = true,
    isPromiseError = true,
    isResourceError = true,
    isRequest = true,
  } = options;

  if (!projectKey) {
    throw new Error("params error，'projectKey' is required");
  }

  if (!url) {
    throw new Error("params error，'url' is required");
  }

  // 挂载配置
  if (options.frequency) {
    window[CONFIG.KEY] = options;
  } else {
    window[CONFIG.KEY] = { ...options, frequency: 10 };
  }

  // 监听接口请求
  if (isRequest) {
    listenerRequest();
  }

  // 监听页面资源error
  if (isResourceError) {
    listenerResourceError();
  }

  // 监听页面promise发生错误
  if (isPromiseError) {
    listenerPromiseError();
  }

  // 监听performance等信息
  if (isPerformance) {
    listenerPerformance();
  }

  //页面卸载，进行一次数据上传
  if (isDiscard) {
    listenerUnload();
  }

  // 监听路由信息
  if (isRoutes) {
    listenerRoute();
  }

  // 调用回调监听
  if (callback instanceof Function) {
    callback(dispatchData);
  }
}
