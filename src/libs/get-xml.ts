import { XhrResponse } from "ajax-hook"
import getBaseMsg from "./get-base-msg"
import { XMLType } from '../typings';
import format from "../libs/date-format"

//获取接口请求信息
const getXMLInfo = (_response:XhrResponse):XMLType =>{
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

export default getXMLInfo;