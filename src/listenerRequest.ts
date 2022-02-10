// 监听接口请求
import { proxy,XhrResponse } from "ajax-hook"
import dispatchData from './libs/dispatchData';
import { XMLType } from "./typings";
import getBaseMsg from "./libs/getBaseMsg";
import format from "./libs/format";

//获取接口请求信息
const getRequestInfo = (_response:XhrResponse):XMLType =>{
  //如果当前列表中的所有数据都收集完毕，那么执行发送操作
  const { url,headers } = _response.config || {};
  const rq = headers ? headers.rq : 0;
  const _url = url ? url.split('?')[0] : ""
  const rp = Date.now()

  return{
      ...getBaseMsg(),
      type:"interface",
      url:_url,
      rq:format(rq),
      rp:format(rp),
      cd:_response.status || 0,
      tc:rp - rq
  }
}

export default function listenerRequest(){
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
      const xmlObj = getRequestInfo(response)
      dispatchData(xmlObj)

      handler.next(response) 
    }
  })
}