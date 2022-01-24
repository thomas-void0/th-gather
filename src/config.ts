
export type InitiatorType =
  | 'css'
  | 'xmlhttprequest'
  | 'fetch'
  | 'beacon'
  | 'link'
  | 'script'
  | 'iframe'
  | 'other';

export interface Config {
  url: string;
  key: "pc" | "pc_seo" | "mobile_zmb" | "mobile_sqb" | "mobile_cps" | "mobile_dytg" | "mobile_hxb" | "mobile_other" | "";
  outtime: number;
  performance: boolean;
  static: boolean;
  error: boolean;
  filterStatic: InitiatorType[];
  // 是否启用spa页面 上报
  isSPA: boolean;
  tthreshold:number
}

const config: Config = {
  // 上报地址
  url: '/xdnphb/nr/app/ade/explain/page/addPageRqInfo2Log',
  // 用于区分不同项目
  key:"",
  // 上报延迟时间
  outtime: 300,
  // 是否上报性能数据
  performance: true,
  // // 是否上报ajax和fetch性能数据
  // fetch: true,
  // 是否上报静态资源性能数据
  static: true,
  // 是否上报错误信息
  error: true,
  // 需要过滤的静态资源类型css xmlhttprequest fetch beacon link script iframe other
  filterStatic: ["fetch","xmlhttprequest"],
  // 是否启用spa页面 上报
  isSPA: false,
  //数据阀值，达到多少条就进行上报
  tthreshold:10,
};

//定义一个key的检测数组
export const checkKeys:Array<Config["key"]> = [
  "pc",
  "pc_seo",
  "mobile_zmb",
  "mobile_sqb",
  "mobile_cps",
  "mobile_dytg",
  "mobile_hxb",
  "mobile_other",
  ""
]

export default config;
