import uid from './uid';
import { BaseMsg } from '../typings';
import format from './date-format';

// 浏览器宽高
const getWH = () => {
  const w = document.documentElement.clientWidth || document.body.clientWidth;
  const h = document.documentElement.clientHeight || document.body.clientHeight;

  return w + '*' + h;
};

const getUid = () => {
  let uuid = window.localStorage.getItem('NR_GATHER_UID');
  if (!uuid) {
    uuid = uid();
    window.localStorage.setItem('NR_GATHER_UID', uuid);
  }
  const nr_uuid = window.localStorage.getItem('NR_GATHER_USER_UID') || uuid;
  return {uuid,nr_uuid};
};

//获取ua信息
const getUA = ():string=>{
  let _ua = "";

  const UA = window.navigator.userAgent;
  const sIdx = UA.indexOf("(");
  const eIdx = UA.indexOf(")") + 1;
  const localUA = navigator.userAgent.toLocaleLowerCase();

  _ua = UA.substring(sIdx,eIdx);

  //检测浏览器
  if(UA.indexOf('Trident') > -1) return _ua + " IE";
  if(/Presto/i.test(UA)) return _ua + " opera";
  if(/Chrome\/([\d.]+)/.test(UA) || /CriOS\/([\d.]+)/.test(UA)) return _ua + " chrome";
  if(/safari/i.test(UA) && !/Chrome/i.test(UA)) return _ua + " safari";
  if(UA.indexOf('AppleWebKit') > -1) return _ua + " safari or chrome";
  if(UA.indexOf('Gecko') > -1 && UA.indexOf('KHTML') === -1) return _ua + " firefox";
  if(/micromessenger/i.test(UA)) return _ua + " wechat";
  if(localUA.match(/tencenttraveler/) || localUA.match(/qqbrowse/)) return _ua + " qq";

  return _ua + ' none'
}

// 获取基本信息
// eslint-disable-next-line
const getBaseMsg = (): BaseMsg => {
  const ct = window.navigator['connection'];
  const { uuid,nr_uuid } = getUid();

  return {
    // 当前页面路径
    o: window.location.href,
    // ua
    ua: getUA(),
    // 浏览器语言
    ul: window.navigator.language,
    // 网络类型
    ct: ct ? ct.effectiveType : '',
    // 浏览器宽高
    vp: getWH(),
    // 屏幕宽高
    sr: screen.width + '*' + screen.height,
    uid:uuid,
    uuid:nr_uuid,
    gmt:format(),
    key: window['gather_config'].key,
    dpr: window.devicePixelRatio,
    rf: document.referrer,
  };
};

export default getBaseMsg;
