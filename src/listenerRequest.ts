// 监听接口请求
import { proxy } from "ajax-hook"
import getXMLInfo from "./libs/get-xml"
import setUserUUid from "./libs/set-user-uuid"
import sendData from './libs/send-data';

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
      const xmlObj = getXMLInfo(response)
      sendData(xmlObj)

      //设置用户uuid
      setUserUUid(response);
      handler.next(response) 
    }
  })
}