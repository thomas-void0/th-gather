import { KEY, defaultGatherKeys } from './config';
import { Msg, Options } from './typings';

import Store from './libs/store';
import isFunction from './libs/isFunction';
import listenerPerformance from './listenerPerformance';
import listenerPromiseError from './listenerPromiseError';
import listenerRequest from './listenerRequest';
import listenerResourceError from './listenerResourceError';
import listenerRoute from './listenerRoute';
import listenerUnload from './listenerUnload';

export default async function init(options: Options): Promise<void> {
  // 仅能初始化一次配置
  if (window[KEY]) {
    throw new Error('just initialized once');
  }

  const {
    projectKey, // 项目key
    url, // 上报地址
    beforeInit, // 初始化之前运行
    mergeMsg, // 合并自定义数据到每一条数据中
  } = options;

  if (!projectKey) {
    throw new Error("params error，'projectKey' is required");
  }

  if (!url) {
    throw new Error("params error，'url' is required");
  }

  // 创建存储数据仓库
  window[KEY] = {
    store: new Store<Msg[]>([]),
    ...options,
  };

  // 挂载配置
  if (!options.frequency) {
    window[KEY].frequency = 10;
  }
  if (!options.gatherKeys) {
    window[KEY].gatherKeys = defaultGatherKeys;
  }

  // 初始化开始
  isFunction(beforeInit) && beforeInit();

  // 是否有需要合并的数据
  if (isFunction(mergeMsg)) {
    // 临时存储需要被合并的数据
    window[KEY].merge = await mergeMsg();
    // window.sessionStorage.setItem(CONFIG.MERGE_KEY, JSON.stringify(data));
  }

  // 注册监听事件
  _registerListen();
}

function _registerListen() {
  const {
    isDiscard = true, // 是否销毁上报
    isRoutes = true,
    isPerformance = true,
    isPromiseError = true,
    isResourceError = true,
    isRequest = true,
  } = window[KEY];

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
}
