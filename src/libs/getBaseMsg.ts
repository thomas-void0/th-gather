import getUuid from './uuid';
import { BaseMsg } from '../typings';
import format from './format';
import * as CONFIG from '../config';

// 浏览器宽高
const getWH = () => {
  const w = document.documentElement.clientWidth || document.body.clientWidth;
  const h = document.documentElement.clientHeight || document.body.clientHeight;

  return w + '*' + h;
};

const getId = () => {
  let uuid = window.localStorage.getItem('$$_th_gather_uuid');
  if (!uuid) {
    uuid = getUuid();
    window.localStorage.setItem('$$_th_gather_uuid', uuid);
  }
  return uuid;
};

//获取ua信息
const getUA = (): string => {
  let _ua = '';

  const UA = window.navigator.userAgent;
  const sIdx = UA.indexOf('(');
  const eIdx = UA.indexOf(')') + 1;
  const localUA = navigator.userAgent.toLocaleLowerCase();

  _ua = UA.substring(sIdx, eIdx);

  //检测浏览器
  if (UA.indexOf('Trident') > -1) return _ua + ' IE';
  if (/Presto/i.test(UA)) return _ua + ' opera';
  if (/Chrome\/([\d.]+)/.test(UA) || /CriOS\/([\d.]+)/.test(UA))
    return _ua + ' chrome';
  if (/safari/i.test(UA) && !/Chrome/i.test(UA)) return _ua + ' safari';
  if (UA.indexOf('AppleWebKit') > -1) return _ua + ' safari or chrome';
  if (UA.indexOf('Gecko') > -1 && UA.indexOf('KHTML') === -1)
    return _ua + ' firefox';
  if (/micromessenger/i.test(UA)) return _ua + ' wechat';
  if (localUA.match(/tencenttraveler/) || localUA.match(/qqbrowse/))
    return _ua + ' qq';

  return _ua + ' none';
};

// 获取基本信息
const getBaseMsg = (): BaseMsg => {
  const ct = window.navigator['connection'];
  return {
    // 当前页面路径
    o: window.location.href,
    // ua
    ua: getUA(),
    // 浏览器语言
    ul: window.navigator.language,
    // 网络类型
    // @ts-ignore
    ct: ct ? ct.effectiveType : '',
    // 浏览器宽高
    vp: getWH(),
    // 屏幕宽高
    sr: screen.width + '*' + screen.height,
    uuid: getId(),
    gmt: format(),
    key: window[CONFIG.KEY].projectKey,
    dpr: window.devicePixelRatio,
    rf: document.referrer,
  };
};

export default getBaseMsg;
