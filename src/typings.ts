import Merge from './libs/merge';
export interface BaseMsg {
  // 项目key
  key: string;
  // 当前页面路径
  o: string;
  ua: string;
  // 浏览器语言
  ul: string;
  // 网络类型
  ct: string;
  // 浏览器宽高
  vp: string;
  // 屏幕宽高
  sr: string;
  // 表示用户的唯一值
  uuid: string;
  // 时间
  gmt: string;
  // devicePixelRatio
  dpr: number;
  // referer
  rf: string;
}

export interface Performance {
  type: 'performance';
  // dns查询时间
  dns: number;
  // tcp连接耗时
  tcp: number;
  // 读取页面第一个字节的时间
  ttfb: number;
  // 白屏时间
  bt: number;
  // 解析dom树耗时
  dt: number;
  // dom完成时间
  drt: number;
  // request请求耗时
  rt: number;
  // 页面完成时间
  lt: number;
  //当前页面如何导航到此处
  nv: number;
}

export interface ErrorMsg {
  type: 'error';
  // 错误种类
  st: string;
  // 错误文件
  file: string;
  // 错误栈
  // stack: string;
  // 错误信息
  msg: string;
}

//配置接口请求
export interface XMLType {
  type: 'interface';
  //接口请求地址
  url: string;
  //接口耗时
  tc: number;
  //状态码
  cd: number;
  //发送请求时间
  rq: string;
  //接受响应时间
  rp: string;
}

// 路由类型统计
export interface PvType {
  type: 'pv';
  //路由地址
  pathname: string;
  //上一个跳转地址
  from: string;
  //网页标题
  title: string;
  //持续时间
  stay: number;
}

export type ExtraMsg =
  | XMLType
  | Performance
  | ErrorMsg
  | PvType
  | {
      type: string;
      [propKey: string]: any;
    };

export type Msg = Merge<BaseMsg, ExtraMsg>;

export interface Options {
  /* 上报项目key值 */
  projectKey: string;
  /* 上报地址 */
  url: string;
  /* 需要收集的字段key值 */
  gatherKeys?: (keyof BaseMsg)[];
  /* 扩展函数，在init的时候被调用。可以接受到记录对象 */
  callback?: (dispatchData: (arg: ExtraMsg) => void) => void;
  /* 上报频率默认10条 */
  frequency?: number;
  /* 是否不上报数量不足的记录 */
  isDiscard?: boolean;
  /* 是否监听路由信息 */
  isRoutes?: boolean;
  /* 是否监听浏览器性能信息 */
  isPerformance?: boolean;
  /* 是否监听promise错误 */
  isPromiseError?: boolean;
  /* 是否监听页面资源错误 */
  isResourceError?: boolean;
  /* 是否监听接口请求信息 */
  isRequest?: boolean;
}
