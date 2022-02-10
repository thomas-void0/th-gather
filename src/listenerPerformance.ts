// 监听用户浏览器信息
import dispatchData from "./libs/dispatchData";
import getBaseMsg from './libs/getBaseMsg';
import { Performance } from './typings';

export interface Perfaormance {
  dns: number;
  tcp: number;
  ttfb: number;
  bt: number;
  dt: number;
  drt: number;
  rt: number;
  lt: number;
}

const performance = (): Performance => {
  let timing: PerformanceTiming | PerformanceNavigationTiming =
    window.performance.timing;

  if (typeof window.PerformanceNavigationTiming === 'function') {
    try {
      const nt2Timing = window.performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      if (nt2Timing) {
        timing = nt2Timing;
      }
    } catch (error) {} // eslint-disable-line
  }

  return {
    ...getBaseMsg(),
    type: 'performance',
    // dns查询时间
    dns: timing.domainLookupEnd - timing.domainLookupStart,
    // tcp连接耗时
    tcp: timing.connectEnd - timing.connectStart,
    // 读取页面第一个字节的时间
    ttfb: timing.responseStart - timing.fetchStart,
    // 白屏时间
    bt: timing.domInteractive - timing.fetchStart,
    // 解析dom树耗时
    dt: timing.domComplete - timing.domInteractive,
    // dom完成时间
    drt: timing.domContentLoadedEventEnd - timing.fetchStart,
    // request请求耗时
    rt: timing.responseEnd - timing.responseStart,
    lt: timing.loadEventEnd - timing.fetchStart,
    //跳转方式
    nv: window.performance.navigation.type
  };
};

//一定时间后开始监听performance
const _listenerPerformance = () => setTimeout(() => dispatchData(performance()), window['$$th-gather'].outtime);

export default function listenerPerformance(){
  window.addEventListener('load', _listenerPerformance, false);
}